import { User } from "@octokit/graphql-schema";
import { z } from "zod";

export const getGithubProfileRequest = z.object({
  username: z.string(),
  year: z.string().regex(/^\d+$/),
  mock: z
    .string()
    .optional()
    .transform((value) => value === "true"),
});

type ContributionDay =
  User["contributionsCollection"]["contributionCalendar"]["weeks"][number]["contributionDays"][number];

// TODO(nickbar01234) - Hassle to get right
export type UserQuery = {
  user: {
    avatarUrl: User["avatarUrl"];
    repositories: Pick<User["repositories"], "totalCount">;
    issues: Pick<User["issues"], "totalCount">;
    pullRequests: Pick<User["pullRequests"], "totalCount">;
    contributionsCollection: {
      contributionCalendar: {
        isHalloween: User["contributionsCollection"]["contributionCalendar"]["isHalloween"];
        totalContributions: User["contributionsCollection"]["contributionCalendar"]["totalContributions"];
        weeks: Array<{
          contributionDays: Array<Omit<ContributionDay, "contributionLevel">>;
          firstDay: string;
        }>;
      };
    };
  };
};
