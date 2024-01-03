import { env } from "@/env/index.mjs";
import { google } from "googleapis";
import { Octokit } from "octokit";

export const octokit = new Octokit({ auth: env.GITHUB_TOKEN });

export const driveV3 = google.drive({
  version: "v3",
  auth: env.GOOGLE_API_KEY,
});
