import { env } from "@/env/index.mjs";
import { StatusCode } from "@/server";
import { google } from "googleapis";
import { NextResponse } from "next/server";

export const GET = async () => {
  const drive = google.drive({ version: "v2", auth: env.GOOGLE_API_KEY });
  return NextResponse.json("Not implemented", {
    status: StatusCode.NOT_IMPLEMENTED,
  });
};
