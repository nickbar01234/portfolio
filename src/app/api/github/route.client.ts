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
  req: GetGithubFileMetadataRequest
) => {
  const { body, ...rest } = req;
  const url = `/api/github?username=${body.username}&repo=${
    body.repo
  }&paths=${body.paths.join(",")}`;
  console.log(url);
  const res = await fetch(url, { method: "GET", ...rest });
  const json = await res.json();
  return getGithubFileMetadataResponse.parse(json);
};
