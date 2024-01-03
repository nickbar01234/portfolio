import { NextRequest, NextResponse } from "next/server";
import {
  getGithubFileMetadataRequest,
  getGithubFileMetadataResponse,
} from "./route.schema";
import { StatusCode } from "@/server";
import { octokit } from "@/server/sdk";

export const GET = async (req: NextRequest) => {
  try {
    const queries = getGithubFileMetadataRequest.safeParse(
      Object.fromEntries(req.nextUrl.searchParams.entries())
    );
    if (!queries.success) {
      return NextResponse.json(
        { code: "INVALID", message: "Invalid queries" },
        { status: StatusCode.BAD_REQUEST }
      );
    }

    const allMetadata = await Promise.all(
      queries.data.paths.map(async (path) => {
        const metadata = await octokit.rest.repos.listCommits({
          owner: queries.data.username,
          repo: queries.data.repo,
          ref: "main",
          per_page: 1,
          page: 1,
          path: path,
        });

        // TODO(nickbar01234) - Handle rate limit 403
        // TODO(nickbar01234) - Handle empty array
        return {
          path: path,
          author: metadata.data[0].commit.author?.name ?? queries.data.username,
          modified:
            metadata.data[0].commit.author?.date ?? new Date().toISOString(),
        };
      })
    );
    return NextResponse.json(getGithubFileMetadataResponse.parse(allMetadata));
  } catch (e: any) {
    return NextResponse.json(
      {
        code: "UNKNOWN",
        message: "Unknown error occured",
      },
      { status: StatusCode.INTERNAL_SERVER_ERROR }
    );
  }
};
