import { UserQuery } from "@/app/api/github/profile/route.schema";
import { octokit } from "../sdk";

interface GetGithubProfileParams {
  username: string;
  year: number;
}

export const getGithubProfile = async (params: GetGithubProfileParams) => {
  const { username, year } = params;

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
