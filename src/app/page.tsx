"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ProgramItem } from "@/components/computer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { openNewTab } from "@/utils";

// ╰─➤  curl -s "https://api.github.com/repos/nickbar01234/config/commits?paths=lvim%2Fconfig.lua&per_page=1&page=1"                                                                                           130 ↵
const Page = () => {
  const router = useRouter();

  return (
    <div className="p-4 h-full flex flex-col flex-wrap gap-4 content-start">
      <ProgramItem
        icon={<FontAwesomeIcon icon={faCog} size="lg" />}
        name="a.out"
        onClick={() => router.push("/portfolio")}
      />
      <ProgramItem
        icon={<FontAwesomeIcon icon={faGithub} size="lg" />}
        name="Projects"
        onClick={() => openNewTab("https://github.com/nickbar01234")}
      />
      <ProgramItem
        icon={<FontAwesomeIcon icon={faLinkedin} size="lg" />}
        name="Social"
        onClick={() => openNewTab("https://www.linkedin.com/in/nick-huy-doan/")}
      />
    </div>
  );
};

export default Page;
