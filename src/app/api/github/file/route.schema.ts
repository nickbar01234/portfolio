import { z } from "zod";

export const getGithubFileMetadataRequest = z.object({
  username: z.string(),
  repo: z.string(),
  paths: z.string().transform((input) => input.split(",")),
});

export const getGithubFileMetadataResponse = z.array(
  z.object({
    path: z.string(),
    author: z.string(),
    modified: z.string(),
  })
);
