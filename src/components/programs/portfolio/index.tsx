"use client";

import { Footer } from "@/components";
import TabNavigation, { Tutorial } from "@/components/programs/portfolio/tabs";

const Portfolio = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="p-2 h-full overflow-y-scroll scrollbar">
        <TabNavigation tabs={[Tutorial]} activeId={Tutorial.id} />
        <Tutorial />
      </div>
      <div className="mt-auto w-full">
        {/* TODO(nickbar01234) - Dynamic information */}
        <Footer author="nickbar01234" lastModified={new Date("2023-01-01")} />
      </div>
    </div>
  );
};

export default Portfolio;
