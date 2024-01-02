import { env } from "@/env/index.mjs";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import https from "https";

export const GET = async () => {
  const drive = google.drive({ version: "v3", auth: env.GOOGLE_API_KEY });
  const res = await drive.files.list({
    q: `'${env.HEALTH_FOLDER}' in parents and trashed=false`,
    fields: "files(id,name)",
    orderBy: "createdTime desc",
    pageSize: 1,
  });
  const files = res.data.files ?? [];

  if (files.length > 0) {
    const fileRes = await drive.files.get({
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

    return NextResponse.json(data);
  }

  return NextResponse.json("Empty");
};
