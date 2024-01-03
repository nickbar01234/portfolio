import { env } from "@/env/index.mjs";
import { Octokit } from "octokit";

export const octokit = new Octokit({ auth: env.GITHUB_TOKEN });
