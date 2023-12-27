"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { DesktopItem } from "@/components/computer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { openNewTab } from "@/utils";

const Page = () => {
  const router = useRouter();

  const desktopItems = React.useMemo(
    () => [
      {
        icon: <FontAwesomeIcon icon={faCog} size="lg" />,
        name: "a.out",
        onClick: () => router.push("/portfolio"),
      },
      {
        icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
        name: "Projects",
        onClick: () => openNewTab("https://github.com/nickbar01234"),
      },
      {
        icon: <FontAwesomeIcon icon={faLinkedin} size="lg" />,
        name: "Social",
        onClick: () => openNewTab("https://www.linkedin.com/in/nick-huy-doan/"),
      },
    ],
    [router]
  );

  return (
    <div className="p-4 h-full flex flex-col flex-wrap gap-4 content-start">
      {desktopItems.map((item, idx) => (
        <DesktopItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default Page;
