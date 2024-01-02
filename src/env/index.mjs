import { z } from "zod";

const serverSchema = z.object({
  GITHUB_TOKEN: z.string(),
  GOOGLE_API_KEY: z.string(),
  HEALTH_FOLDER: z.string(),
  WORKOUT_FOLDER: z.string(),
});

const serverEnv = serverSchema.parse(process.env);

export const env = serverEnv;
