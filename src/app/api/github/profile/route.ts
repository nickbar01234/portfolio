import { octokit } from "@/server/sdk";
import { NextRequest, NextResponse } from "next/server";
import { getGithubProfileRequest } from "./route.schema";
import { StatusCode } from "@/server";
import { promises as fs } from "fs";

export const GET = async (req: NextRequest) => {
  const queries = getGithubProfileRequest.safeParse(
    Object.fromEntries(req.nextUrl.searchParams.entries())
  );

  if (!queries.success) {
    return NextResponse.json(
      { code: "INVALID", message: "Invalid queries", data: queries.error },
      { status: StatusCode.BAD_REQUEST }
    );
  } else if (queries.data.mock) {
    const file = await fs.readFile(
      process.cwd() + "/__mock__/getGithubProfile.json",
      "utf8"
    );
    return NextResponse.json(JSON.parse(file));
  } else {
    const res = await octokit.graphql(
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
              isHalloween
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
  }
};
