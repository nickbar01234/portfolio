"use client";

import React from "react";
import { PopUp } from "../editor";
import { PortfolioContext, PortfolioContextProps } from "@/context/";
import { RootNavigationContext } from "@/context";
import { FullFile } from "@/context/Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faFolder } from "@fortawesome/free-solid-svg-icons";

interface FileProps {
  file: FullFile;
  setDisplayDirectory: PortfolioContext["popups"]["directory"]["setDisplay"];
}

interface FolderProps {
  folder: PortfolioContextProps["files"];
  setDisplayDirectory: PortfolioContext["popups"]["directory"]["setDisplay"];
}

interface DirectoryProps {
  files: PortfolioContextProps["files"];
  displayDirectory: PortfolioContext["popups"]["directory"]["display"];
  setDisplayDirectory: PortfolioContext["popups"]["directory"]["setDisplay"];
}

const File = (props: FileProps) => {
  const { file, setDisplayDirectory } = props;
  const { onFileClick } = React.useContext(RootNavigationContext);

  return (
    <div
      className="w-full grid lg:grid-cols-[5%_95%] grid-cols-[10%_90%] gap-x-2 hover:bg-comment-variant cursor-pointer"
      onClick={() => {
        onFileClick(file);
        setDisplayDirectory(false);
      }}
    >
      <div className="flex justify-end items-center">
        <file.Icon />
      </div>
      <span>{file.displayName}</span>
    </div>
  );
};

const Folder = (props: FolderProps) => {
  const { folder, setDisplayDirectory } = props;
  const [expand, setExpand] = React.useState(false);

  return (
    <div className="w-full">
      <div
        className="grid lg:grid-cols-[5%_95%] grid-cols-[10%_90%] gap-x-2 hover:bg-comment-variant cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <div className="flex justify-end items-center">
          <FontAwesomeIcon
            icon={faCaretUp}
            rotation={expand ? 180 : 90}
            className="text-[#888d94]"
          />
        </div>
        <div className="flex gap-x-2">
          <div className="flex justify-end items-center">
            <FontAwesomeIcon icon={faFolder} className="text-[#888d94]" />
          </div>
          <span>{folder.displayName}</span>
        </div>
      </div>
      {expand && (
        <div className="grid lg:grid-cols-[5%_95%] grid-cols-[10%_90%] gap-x-2">
          {folder.files.map((file) => (
            <React.Fragment key={file.relativePath}>
              <div />
              <File file={file} setDisplayDirectory={setDisplayDirectory} />
            </React.Fragment>
          ))}
          {folder.directories.map((directory) => (
            <React.Fragment key={directory.absolutePath}>
              <div />
              <Folder
                key={directory.absolutePath}
                folder={directory}
                setDisplayDirectory={setDisplayDirectory}
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

const Directory = (props: DirectoryProps) => {
  const { displayDirectory, setDisplayDirectory, files } = props;

  return (
    <PopUp
      displayPopUp={displayDirectory}
      setDisplayPopUp={setDisplayDirectory}
    >
      <div className="h-full w-full pt-4 pb-2">
        <div className="h-full w-full flex flex-col gap-y-2 overflow-x-hidden overflow-y-auto scrollbar">
          {files.files.map((file) => (
            <File
              key={file.relativePath}
              file={file}
              setDisplayDirectory={setDisplayDirectory}
            />
          ))}
          {files.directories.map((directory) => (
            <Folder
              key={directory.absolutePath}
              folder={directory}
              setDisplayDirectory={setDisplayDirectory}
            />
          ))}
        </div>
      </div>
    </PopUp>
  );
};

export default Directory;
