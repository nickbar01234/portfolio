import { Directory } from "@/type";
import { readdirSync, statSync } from "fs";

export const directoryTree = (path: string, relative: string): Directory => {
  const directory: Directory = {
    absolutePath: path,
    displayName: relative.split("/").pop() ?? "",
    files: [],
    directories: [],
  };

  readdirSync(path)
    .filter((file) => !file.includes("index.tsx"))
    .forEach((file) => {
      const absolute = `${path}/${file}`;
      if (statSync(absolute).isDirectory()) {
        directory["directories"].push(
          directoryTree(absolute, `${relative}/${file}`)
        );
      } else {
        directory["files"].push({
          displayName: file,
          relativePath: `${relative}/${file.split(".")[0].toLowerCase()}`,
        });
      }
    });

  return directory;
};
