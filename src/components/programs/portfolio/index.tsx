"use client";

import { Tutorial } from "@/components/programs/portfolio/tabs";
import { HelpMenu, Footer } from "./editor";
import React from "react";
import { SideBar, TabBar } from "./navigation";

const FILES = [Tutorial];

const Portfolio = () => {
  const [showHelpMenu, setShowHelpMenu] = React.useState(false);
  const [tabs, setTabs] = React.useState([Tutorial]);
  const [activeTabId, setActiveTabId] = React.useState(Tutorial.id);

  return (
    <div className="h-full w-full grid grid-cols-[4%_96%]">
      <div className="h-full w-full bg-bg-variant py-2 border-r-2 border-r-bg-highlight">
        <SideBar files={FILES} />
      </div>
      <div className="h-full w-full grid grid-rows-[5%_87%_8%] overflow-y-hidden overflow-x-auto scrollbar">
        <div className="pt-2 pl-2">
          <TabBar tabs={tabs} activeId={activeTabId} />
          <HelpMenu display={showHelpMenu} />
        </div>
        <>
          {tabs
            .filter((tab) => tab.id === activeTabId)
            .map((Tab) => (
              <Tab key={Tab.id} />
            ))}
        </>
        <Footer author="nickbar01234" lastModified={new Date("2023-01-01")} />
      </div>
    </div>
  );
};

export default Portfolio;
