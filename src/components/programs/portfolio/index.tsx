"use client";

import { Footer } from "@/components";
import TabNavigation, { Tutorial } from "@/components/programs/portfolio/tabs";
import { HelpMenu } from "./editor";

const Portfolio = () => {
  return (
    <div className="h-full w-full grid grid-rows-12">
      <div className="pt-2 pl-2 row-span-1">
        <TabNavigation tabs={[Tutorial]} activeId={Tutorial.id} />
        <HelpMenu display />
      </div>
      <div className="row-span-10 overflow-y-hidden">
        <Tutorial />
      </div>
      <div className="row-span-1">
        <Footer author="nickbar01234" lastModified={new Date("2023-01-01")} />
      </div>
    </div>
  );
};

export default Portfolio;
