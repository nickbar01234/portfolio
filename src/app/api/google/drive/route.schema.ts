import { z } from "zod";

export const getAppleHealthResponse = z.object({
  calories: z.number(),
  workoutTime: z.number(),
  standHours: z.number(),
  stepCount: z.number(),
  lastModified: z.string(),
});
