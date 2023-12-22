"use client";

import React from "react";
import { Footer } from "./_components/index";

// ╰─➤  curl -s "https://api.github.com/repos/nickbar01234/config/commits?paths=lvim%2Fconfig.lua&per_page=1&page=1"                                                                                           130 ↵
const Home = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="rounded-md flex bg-bg h-5/6 w-5/6 shadow-2xl shadow-comment">
        <div className="self-end w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
