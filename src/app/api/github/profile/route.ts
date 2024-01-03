import { octokit } from "@/server/sdk";
import { NextRequest, NextResponse } from "next/server";
import { getGithubProfileRequest } from "./route.schema";
import { StatusCode } from "@/server";

export const GET = async (req: NextRequest) => {
  const queries = getGithubProfileRequest.safeParse(
    Object.fromEntries(req.nextUrl.searchParams.entries())
  );

  if (!queries.success) {
    return NextResponse.json(
      { code: "INVALID", message: "Invalid queries", data: queries.error },
      { status: StatusCode.BAD_REQUEST }
    );
  }

  const res = await octokit.graphql(
    `query($username: String!, $from: DateTime) {
        user(login: $username) {
          repositories(isFork: false, isArchived: false, privacy: PUBLIC, isLocked: false) {
            totalCount
          }
          issues(states: OPEN) {
            totalCount
          }
          pullRequests(states: OPEN) {
            totalCount
          }
          contributionsCollection(from: $from) {
            contributionCalendar {
              colors
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }
    `,
    {
      username: queries.data.username,
      from: new Date(`${queries.data.year}-01-01`).toISOString(),
      to: new Date(`${queries.data.year}-12-31`).toISOString(),
    }
  );

  return NextResponse.json(res);
};
