import { NextRequest, NextResponse } from "next/server";
import {
  getGithubFileMetadataRequest,
  getGithubFileMetadataResponse,
} from "./route.schema";
import { StatusCode } from "@/server";
import { octokit } from "@/server/sdk";

export const GET = async (req: NextRequest) => {
  try {
    const body = getGithubFileMetadataRequest.safeParse(
      Object.fromEntries(req.nextUrl.searchParams.entries())
    );
    if (!body.success) {
      return NextResponse.json(
        { code: "INVALID", message: "Invalid body" },
        { status: StatusCode.BAD_REQUEST }
      );
    }

    const allMetadata = await Promise.all(
      body.data.paths.map(async (path) => {
        console.log(path);
        const metadata = await octokit.rest.repos.listCommits({
          owner: body.data.username,
          repo: body.data.repo,
          ref: "main",
          per_page: 1,
          page: 1,
          path: path,
        });

        // TODO(nickbar01234) - Handle rate limit 403
        // TODO(nickbar01234) - Handle empty array
        return {
          path: path,
          author: metadata.data[0].commit.author?.name ?? body.data.username,
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
