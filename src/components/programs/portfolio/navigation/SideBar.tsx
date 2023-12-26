import { Component } from "@/type";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PopUp } from "../editor";
import Directory from "./Directory";
import { PortfolioContext } from "@/components/programs";

interface SideBarProps {
  setTabs: React.Dispatch<React.SetStateAction<Component[]>>;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = (props: SideBarProps) => {
  const { setTabs, setActiveTabId } = props;
  const {
    popups: { directory },
  } = React.useContext(PortfolioContext);
  const { display: displayDirectory, setDisplay: setDisplayDirectory } =
    directory;

  return (
    <div className="h-full w-full flex flex-col text-center gap-y-2">
      <FontAwesomeIcon
        icon={faFolder}
        className="cursor-pointer"
        onClick={() => setDisplayDirectory(!displayDirectory)}
      />
    </div>
  );
};

export default SideBar;
