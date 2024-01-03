import { User } from "@octokit/graphql-schema";
import { z } from "zod";

export const getGithubProfileRequest = z.object({
  username: z.string(),
  year: z.string().regex(/^\d+$/),
});

export type UserQuery = {
  user: {
    repositories: User["repositories"]["totalCount"];
    issues: User["issues"]["totalCount"];
    pullRequests: User["issues"]["totalCount"];
    contributionsCollection: {
      contributionCalendar: Pick<
        User["contributionsCollection"]["contributionCalendar"],
        "colors" | "weeks"
      >;
    };
  };
};
