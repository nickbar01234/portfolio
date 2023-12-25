import { Component } from "@/type";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PopUp } from "../editor";
import Directory from "./Directory";

interface SideBarProps {
  files: Component[];
  setTabs: React.Dispatch<React.SetStateAction<Component[]>>;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = (props: SideBarProps) => {
  const { files, setTabs, setActiveTabId } = props;
  const [displayDirectory, setDisplayDirectory] = React.useState(false);

  const onFileClick = (file: Component) => {
    setTabs((prev) =>
      prev.find((tab) => tab.id === file.id) ? prev : [...prev, file]
    );
    setActiveTabId(file.id);
    setDisplayDirectory(false);
  };

  return (
    <div className="h-full w-full flex flex-col text-center gap-y-2">
      {displayDirectory && (
        <PopUp setDisplayPopUp={setDisplayDirectory}>
          <div className="pt-4 pb-2">
            <Directory files={files} onFileClick={onFileClick} />
          </div>
        </PopUp>
      )}
      <FontAwesomeIcon
        icon={faFolder}
        className="cursor-pointer"
        onClick={() => setDisplayDirectory(!displayDirectory)}
      />
    </div>
  );
};

export default SideBar;
