import { UserQuery } from "@/app/api/github/profile/route.schema";
import { octokit } from "../sdk";
import { readdirSync, promises as fs } from "fs";
import { directoryTree } from "../utils";
import { Directory } from "@/type";

interface GetGithubProfileParams {
  username: string;
  year: number;
  mock?: boolean;
}

export const getGithubProfile = async ({
  username,
  year,
  mock = process.env.NODE_ENV === "development",
}: GetGithubProfileParams) => {
  if (mock) {
    const file = await fs.readFile(
      process.cwd() + "/__mock__/getGithubProfile.json",
      "utf8"
    );
    return JSON.parse(file) as UserQuery;
  }

  const res: UserQuery = await octokit.graphql(
    `query($username: String!, $from: DateTime, $to: DateTime) {
        user(login: $username) {
          avatarUrl
          repositories(isFork: false, isArchived: false, privacy: PUBLIC, isLocked: false) {
            totalCount
          }
          issues(states: OPEN) {
            totalCount
          }
          pullRequests(states: OPEN) {
            totalCount
          }
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  weekday
                  contributionLevel
                }
              }
            }
          }
        }
      }
    `,
    {
      username: username,
      from: new Date(`${year}-01-01`).toISOString(),
      to: new Date(`${year}-12-31`).toISOString(),
    }
  );

  return res;
};

interface GetGithubFileMetadataParams {
  username: string;
  repo: string;
  base: string;
  path: string;
  mock?: boolean;
}

type GetGithubFileMetadataResponse = Awaited<
  ReturnType<typeof _getGithubFileMetadata>
>;

export const getGithubFileMetadata = async ({
  username,
  repo,
  path,
  mock = process.env.NODE_ENV === "development",
}: GetGithubFileMetadataParams) => {
  if (mock) {
    const res: GetGithubFileMetadataResponse = {
      absolutePath: "src/components/programs/portfolio/files",
      displayName: "",
      files: [
        {
          displayName: "About",
          relativePath: "/about",
          author: "nickbar01234",
          modified: "2024-01-09T03:06:38Z",
        },
        {
          displayName: "Activity",
          relativePath: "/activity",
          author: "nickbar01234",
          modified: "2024-01-09T03:06:38Z",
        },
        {
          displayName: "Experience",
          relativePath: "/experience",
          author: "nickbar01234",
          modified: "2024-01-09T15:54:30Z",
        },
        {
          displayName: "Skills",
          relativePath: "/skills",
          author: "nickbar01234",
          modified: "2024-01-09T03:06:38Z",
        },
      ],
      directories: [
        {
          absolutePath: "src/components/programs/portfolio/files/blog",
          displayName: "blog",
          files: [
            {
              displayName: "CreatingNpmPackage",
              author: "nickbar01234",
              relativePath: "/blog/creatingnpmpackage",
              modified: "2024-01-09T03:06:38Z",
            },
          ],
          directories: [],
        },
      ],
    };

    return res;
  }

  let directory = directoryTree(path, "");
  return await _getGithubFileMetadata(username, repo, directory);
};

const _getGithubFileMetadata = async (
  username: string,
  repo: string,
  directory: Directory
): Promise<Directory<{ author: string; modified: string }>> => {
  const files = await Promise.all(
    directory.files.map(async (file) => {
      const res = await octokit.rest.repos.listCommits({
        owner: username,
        repo: repo,
        ref: "main",
        per_page: 1,
        page: 1,
        path: `${directory.absolutePath}/${file.displayName}`,
      });

      return {
        ...file,
        displayName: file.displayName.split(".")[0],
        author: res.data[0].commit.author?.name ?? username,
        modified: res.data[0].commit.author?.date ?? new Date().toISOString(),
      };
    })
  );

  return {
    ...directory,
    files: files,
    directories: await Promise.all(
      directory.directories.map(async (dir) =>
        _getGithubFileMetadata(username, repo, dir)
      )
    ),
  };
};
