import { env } from "@/env/index.mjs";
import { NextResponse } from "next/server";
import https from "https";
import { driveV3 } from "@/server/sdk";

export const GET = async () => {
  const res = await driveV3.files.list({
    q: `'${env.HEALTH_FOLDER}' in parents and trashed=false`,
    fields: "files(id,name)",
    orderBy: "createdTime desc",
    pageSize: 1,
  });
  const files = res.data.files ?? [];

  if (files.length > 0) {
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

    return NextResponse.json(data);
  }

  return NextResponse.json("Empty");
};
