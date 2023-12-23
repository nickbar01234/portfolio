"use client";

import React from "react";
import TabNavigation, { Tutorial, Intro } from "./_components/tabs";
import { Footer } from "./_components/index";

// ╰─➤  curl -s "https://api.github.com/repos/nickbar01234/config/commits?paths=lvim%2Fconfig.lua&per_page=1&page=1"                                                                                           130 ↵
const Home = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="rounded-md flex flex-col bg-bg h-5/6 w-5/6 shadow-2xl shadow-comment">
        <div className="p-2 h-full overflow-y-scroll scrollbar">
          <TabNavigation tabs={[Tutorial, Intro]} activeId={Tutorial.id} />
          <div className="overflow-y-scroll scrollbar">hi</div>
        </div>
        <div className="mt-auto w-full">
          {/* TODO(nickbar01234) - Dynamic date */}
          <Footer author="nickbar01234" lastModified={new Date("2023-01-01")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
