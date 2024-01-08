"use client";

import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PortfolioContext } from "@/context/";

interface SideBarProps {
  displayDirectory: PortfolioContext["popups"]["directory"]["display"];
  setDisplayDirectory: PortfolioContext["popups"]["directory"]["setDisplay"];
}

const SideBar = (props: SideBarProps) => {
  const { displayDirectory, setDisplayDirectory } = props;

  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-2">
      <FontAwesomeIcon
        icon={faFolder}
        className="cursor-pointer"
        onClick={() => setDisplayDirectory(!displayDirectory)}
      />
    </div>
  );
};

export default SideBar;
