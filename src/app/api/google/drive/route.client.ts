import { TypedFetch } from "@/type";
import { getAppleHealthResponse } from "./route.schema";

type GetAppleHealthRequest = TypedFetch;

export const getAppleHealth = async (
  req: GetAppleHealthRequest,
  mock: boolean = false
) => {
  if (mock) {
    return getAppleHealthResponse.parse({
      calories: 500,
      workoutTime: 45,
      standHours: 12,
      stepCount: 2650,
      lastModified: new Date().toISOString(),
    });
  }

  const { body, ...rest } = req;
  const data = await fetch("/api/google/drive", { method: "GET", ...rest });
  return getAppleHealthResponse.parse(await data.json());
};
