import { NextRequest, NextResponse } from "next/server";
import {
  getGithubFileMetadataRequest,
  getGithubFileMetadataResponse,
} from "./route.schema";
import { StatusCode } from "@/server";
import { z } from "zod";

/**
 * Describes only the relevant fields - the actual object may contain more
 * fields.
 */
const githubApiSchema = z.array(
  z.object({
    commit: z.object({
      author: z.object({
        name: z.string(),
        date: z.string(),
      }),
    }),
  })
);

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
        // TODO(nickbar01234) - Handle rate limit 403
        const res = await fetch(
          `https://api.github.com/repos/${body.data.username}/${body.data.repo}/commits?path=${path}&per_page=1&page=1`
        );
        const json = await res.json();
        const metadata = githubApiSchema.parse(json)[0];
        return {
          path: path,
          author: metadata.commit.author.name,
          modified: metadata.commit.author.date,
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
