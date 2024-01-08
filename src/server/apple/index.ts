import { env } from "@/env/index.mjs";
import { driveV3 } from "../sdk";
import https from "https";
import { healthSchema } from "@/app/api/google/drive/route.schema";

interface GetAppleHealthParams {
  mock?: boolean;
}

const KEYS = [
  "apple_exercise_time",
  "apple_stand_hour",
  "step_count",
  "active_energy",
] as const;

export const getAppleHealth = async ({
  mock = process.env.NODE_ENV === "development",
}: GetAppleHealthParams) => {
  if (mock) {
    return {
      calories: 400,
      workoutTime: 25,
      standHours: 12,
      stepCount: 8000,
      lastModified: new Date().toISOString(),
    };
  }
  const res = await driveV3.files.list({
    q: `'${env.HEALTH_FOLDER}' in parents and trashed=false`,
    fields: "files(id,name)",
    orderBy: "createdTime desc",
    pageSize: 1,
  });
  const files = res.data.files ?? [];
  const fileRes = await driveV3.files.get({
    fileId: files[0].id ?? undefined,
    alt: "media",
  });

  const data = await new Promise((resolve, reject) => {
    let data = "";

    https.get(fileRes.request.responseURL, (res) => {
      res
        .on("data", (chunk) => (data += chunk))
        .on("end", () => resolve(JSON.parse(data)));
      // TODO(nickbar01234) - Handle error
    });
  });
  const parsedData = healthSchema.parse(data);

  let maxUnixDate = 0;
  const metricRecord: Record<(typeof KEYS)[number], number> = {
    apple_exercise_time: 0,
    apple_stand_hour: 0,
    step_count: 0,
    active_energy: 0,
  };

  parsedData.data.metrics.forEach((metric) => {
    if (metric.name in metricRecord) {
      metric.data.forEach((data) => {
        const date = new Date(data.date);
        const offset = date.getTimezoneOffset() * 60000;
        const currentTime = new Date(date.getTime() - offset);
        maxUnixDate = Math.max(maxUnixDate, currentTime.getTime());
        metricRecord[metric.name as (typeof KEYS)[number]] += data.qty;
      });
    }
  });

  return {
    calories: Math.floor(metricRecord["active_energy"]),
    workoutTime: metricRecord["apple_exercise_time"],
    standHours: metricRecord["apple_stand_hour"],
    stepCount: metricRecord["step_count"],
    lastModified: new Date(maxUnixDate).toISOString(),
  };
};
