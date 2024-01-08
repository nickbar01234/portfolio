"use client";

import React from "react";
import { PopUp } from "../editor";
import { PortfolioContext, PortfolioContextProps } from "@/context/";
import { RootNavigationContext } from "@/context";

interface DirectoryProps {
  files: PortfolioContextProps["files"];
  displayDirectory: PortfolioContext["popups"]["directory"]["display"];
  setDisplayDirectory: PortfolioContext["popups"]["directory"]["setDisplay"];
}

const Directory = (props: DirectoryProps) => {
  const { displayDirectory, setDisplayDirectory, files } = props;
  const { onFileClick } = React.useContext(RootNavigationContext);

  return (
    <PopUp
      displayPopUp={displayDirectory}
      setDisplayPopUp={setDisplayDirectory}
    >
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
