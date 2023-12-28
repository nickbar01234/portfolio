import { TypedFetch } from "@/type";
import { z } from "zod";
import {
  getGithubFileMetadataRequest,
  getGithubFileMetadataResponse,
} from "./route.schema";

type GetGithubFileMetadataRequest = TypedFetch<
  z.infer<typeof getGithubFileMetadataRequest>
>;

export const getGithubFileMetadata = async (
  req: GetGithubFileMetadataRequest,
  mock: boolean = false
) => {
  const { body, ...rest } = req;

  if (mock) {
    return getGithubFileMetadataResponse.parse(
      body.paths.map((path) => ({
        path: path,
        author: body.username,
        modified: new Date().toISOString(),
      }))
    );
  }

  const url = `/api/github?username=${body.username}&repo=${
    body.repo
  }&paths=${body.paths.join(",")}`;
  const res = await fetch(url, { method: "GET", ...rest });
  const json = await res.json();
  console.log(json);
  return getGithubFileMetadataResponse.parse(json);
};
