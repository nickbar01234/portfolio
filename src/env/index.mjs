import { z } from "zod";

const serverSchema = z.object({
  GITHUB_TOKEN: z.string(),
});

const serverEnv = serverSchema.parse(process.env);

export const env = serverEnv;
