import { TypedFetch } from "@/type";
import { z } from "zod";
import { UserQuery, getGithubProfileRequest } from "./route.schema";
import { USER } from "./route.mock";

type GetGithubProfileRequest = TypedFetch<
  z.infer<typeof getGithubProfileRequest>
>;

export const getGithubProfile = async (
  req: GetGithubProfileRequest,
  mock: boolean = false
): Promise<UserQuery> => {
  if (mock) {
    return Promise.resolve(USER);
  }

  const { body, ...rest } = req;

  const url = `/api/github/profile?username=${body.username}&year=${body.year}`;
  const res = await fetch(url, { method: "GET", ...rest });
  const json = await res.json();
  return json;
};
