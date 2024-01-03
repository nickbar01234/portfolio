import { TypedFetch } from "@/type";
import { z } from "zod";
import { UserQuery, getGithubProfileRequest } from "./route.schema";

type GetGithubProfileRequest = TypedFetch<
  z.infer<typeof getGithubProfileRequest>
>;

export const getGithubProfile = async (
  req: GetGithubProfileRequest
): Promise<UserQuery> => {
  const { body, ...rest } = req;

  const url = `/api/github/profile?username=${body.username}&from=${body.year}`;
  const res = await fetch(url, { method: "GET", ...rest });
  const json = await res.json();
  return json;
};
