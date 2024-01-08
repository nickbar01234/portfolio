import { UserQuery } from "@/app/api/github/profile/route.schema";
import { octokit } from "../sdk";
import { readdirSync, promises as fs } from "fs";

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

export const getGithubFileMetadata = async ({
  username,
  repo,
  base,
  path,
  mock = process.env.NODE_ENV === "development",
}: GetGithubFileMetadataParams) => {
  let paths = mock
    ? ["About.tsx", "Activity.tsx", "Skills.tsx", "Experience.tsx"]
    : readdirSync(path)
        .filter((file) => !file.includes("index.tsx"))
        .map((file) => `${path}/${file}`);

  if (mock) {
    return paths.map((path) => ({
      normalizedName: path.split("/").pop()?.split(".")[0] ?? "",
      path: path,
      author: username,
      modified: new Date().toISOString(),
    }));
  }

  const allMetadata = await Promise.all(
    paths.map(async (path) => {
      const metadata = await octokit.rest.repos.listCommits({
        owner: username,
        repo: repo,
        ref: "main",
        per_page: 1,
        page: 1,
        path: path,
      });

      // TODO(nickbar01234) - Handle rate limit 403
      // TODO(nickbar01234) - Handle empty array
      return {
        normalizedName: path.split("/").pop()?.split(".")[0] ?? "",
        path: path,
        author: metadata.data[0].commit.author?.name ?? username,
        modified:
          metadata.data[0].commit.author?.date ?? new Date().toISOString(),
      };
    })
  );
  return allMetadata;
};
