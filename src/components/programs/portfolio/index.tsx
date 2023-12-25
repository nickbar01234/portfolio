"use client";

import { Footer } from "@/components";
import TabNavigation, { Tutorial } from "@/components/programs/portfolio/tabs";
import { HelpMenu } from "./editor";
import React from "react";

const Portfolio = () => {
  const [showHelpMenu, setShowHelpMenu] = React.useState(false);

  return (
    <div className="h-full w-full grid grid-rows-[8%_84%_8%] overflow-y-hidden overflow-x-auto scrollbar">
      <div className="pt-2 pl-2">
        <TabNavigation tabs={[Tutorial]} activeId={Tutorial.id} />
        <HelpMenu display={showHelpMenu} />
      </div>
      <Tutorial />
      <div className="">
        <Footer author="nickbar01234" lastModified={new Date("2023-01-01")} />
      </div>
    </div>
  );
};

export default Portfolio;
