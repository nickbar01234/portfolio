"use client";

import React from "react";
import PopUp from "./PopUp";

interface HelpMenuProps {
  displayHelp: boolean;
  setDisplayHelp: React.Dispatch<React.SetStateAction<boolean>>;
}

const ACTIONS = [
  {
    command: ":q",
    description: "Quit",
  },
  {
    command: ":help",
    description: "Help",
  },
  {
    command: (
      <span>
        :tabnew <span className="text-keyword">file</span>
      </span>
    ),
    description: "New tab",
  },
  {
    command: ":!ls",
    description: "Directory",
  },
  {
    command: "j",
    description: "Down",
  },
  {
    command: "k",
    description: "Up",
  },
];

const HelpMenu = ({ displayHelp, setDisplayHelp }: HelpMenuProps) => {
  if (!displayHelp) {
    return null;
  }

  return (
    <PopUp setDisplayPopUp={setDisplayHelp}>
      <div className="h-full w-full flex flex-col">
        <div className="flex w-full justify-center border-b-2 border-b-comment">
          Key Maps
        </div>
        <div className="w-full h-full flex flex-col py-2 overflow-hidden">
          <div className="h-full overflow-y-auto scrollbar px-4">
            {ACTIONS.map((action, idx) => (
              <div key={idx} className="flex justify-between hover:bg-comment">
                <span>{action.description}</span>
                <span className="text-right">{action.command}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default HelpMenu;
