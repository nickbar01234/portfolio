import { z } from "zod";

// https://github.com/Lybron/health-auto-export/wiki/API-Export---JSON-Format
export const healthSchema = z.object({
  data: z.object({
    metrics: z.array(
      z.object({
        name: z.string(),
        data: z.array(z.object({ qty: z.number(), date: z.string() })),
      })
    ),
  }),
});

export const getAppleHealthResponse = z.object({
  calories: z.number(),
  workoutTime: z.number(),
  standHours: z.number(),
  stepCount: z.number(),
  lastModified: z.string(),
});
