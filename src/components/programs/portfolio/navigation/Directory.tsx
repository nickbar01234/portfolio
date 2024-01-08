"use client";

import React from "react";
import { PopUp } from "../editor";
import { PortfolioContext } from "@/context/";
import { RootNavigationContext } from "@/context";

interface DirectoryProps {}

const Directory = (props: DirectoryProps) => {
  const { onFileClick } = React.useContext(RootNavigationContext);
  const {
    files,
    popups: { directory },
  } = React.useContext(PortfolioContext);
  const { display: displayDirectory, setDisplay: setDisplayDirectory } =
    directory;

  if (!displayDirectory) {
    return;
  }

  return (
    <PopUp setDisplayPopUp={setDisplayDirectory}>
      <div className="h-full w-full pt-4 pb-2">
        <div className="h-full w-full flex flex-col gap-y-2 overflow-x-hidden overflow-y-auto scrollbar">
          {files.map((file) => (
            <div
              key={file.id}
              className="grid lg:grid-cols-[5%_95%] grid-cols-[10%_90%] gap-x-2 hover:bg-comment-variant cursor-pointer"
              onClick={() => {
                onFileClick(file.displayName);
                setDisplayDirectory(false);
              }}
            >
              <div className="flex justify-end items-center">
                <file.Icon />
              </div>
              <span>{file.displayName}</span>
            </div>
          ))}
        </div>
      </div>
    </PopUp>
  );
};

export default Directory;
