import { Component } from "@/type";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PopUp } from "../editor";
import { PortfolioContext } from "../..";

interface DirectoryProps {
  onFileClick: (file: Component) => void;
}

const Directory = (props: DirectoryProps) => {
  const { onFileClick } = props;
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
      <div className="pt-4 pb-2">
        <div className="h-full w-full flex flex-col gap-y-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="grid grid-cols-[5%_95%] gap-x-2 hover:bg-comment-variant cursor-pointer"
              onClick={() => onFileClick(file)}
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
