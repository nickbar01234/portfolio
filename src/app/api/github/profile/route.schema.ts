import { User } from "@octokit/graphql-schema";
import { z } from "zod";

export const getGithubProfileRequest = z.object({
  username: z.string(),
  year: z.string().regex(/^\d+$/),
});

type ContributionDay =
  User["contributionsCollection"]["contributionCalendar"]["weeks"][number]["contributionDays"][number];

// TODO(nickbar01234) - Hassle to get right
export type UserQuery = {
  user: {
    repositories: Pick<User["repositories"], "totalCount">;
    issues: Pick<User["issues"], "totalCount">;
    pullRequests: Pick<User["pullRequests"], "totalCount">;
    contributionsCollection: {
      contributionCalendar: {
        colors: User["contributionsCollection"]["contributionCalendar"]["colors"];
        totalContributions: User["contributionsCollection"]["contributionCalendar"]["totalContributions"];
        weeks: Array<{
          contributionDays: Array<Omit<ContributionDay, "contributionLevel">>;
          firstDay: string;
        }>;
      };
    };
  };
};
