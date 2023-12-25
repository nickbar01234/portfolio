"use client";

import React from "react";
import PopUp from "./PopUp";

const HelpMenu = () => {
  const [displayHelp, setDisplayHelp] = React.useState(false);

  if (!displayHelp) {
    return null;
  }

  return (
    <PopUp setDisplayPopUp={setDisplayHelp}>
      <div className="h-full w-full flex flex-col">
        <div className="flex w-full justify-center border-b-2 border-b-comment">
          Key Maps
        </div>
        <div className="w-full h-full grid grid-cols-12 mt-2 gap-x-1 gap-y-2 overflow-auto scrollbar">
          <div className="col-span-1 text-right border-r border-r-comment pr-2">
            <div className="flex flex-col">
              <span>n</span>
              <span>n</span>
            </div>
          </div>
          <div className="col-span-3 text-left border-r border-r-comment pl-2">
            <div className="flex flex-col">
              <span>:help</span>
              <span>:qa</span>
            </div>
          </div>
          <div className="col-span-8 text-left pl-2">
            <div className="flex flex-col">
              <span>Toggle help menu</span>
              <span>Quit</span>
            </div>
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default HelpMenu;
