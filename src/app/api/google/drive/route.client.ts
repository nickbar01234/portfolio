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

  // TODO(nickbar01234) - Read dynamically
  return getAppleHealthResponse.parse({
    calories: 500,
    workoutTime: 45,
    standHours: 30,
    stepCount: 2650,
    lastModified: new Date().toISOString(),
  });
};
