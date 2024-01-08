import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PortfolioContext } from "../..";
import { useRouter } from "next/navigation";
import { RootNavigationContext } from "@/context";

interface TabNavigationProps {
  tabs: string[];
  setTabs: React.Dispatch<React.SetStateAction<string[]>>;
  activeTabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
}

const TabBar = (props: TabNavigationProps) => {
  const { tabs, setTabs, activeTabId, setActiveTabId } = props;
  const { files } = React.useContext(PortfolioContext);
  const { onFileClick, onFileClose } = React.useContext(RootNavigationContext);
  const router = useRouter();

  return (
    <div className="relative z-20 w-full bg-bg">
      <div className="flex gap-x-4">
        {tabs.map((tabId) => {
          const isActive = tabId === activeTabId;
          const file = files.find((file) => file.displayName === tabId);
          if (file === undefined) {
            return null;
          }
          return (
            <div
              className={`text-sm flex items-center gap-x-1.5 hover:comment-variant hover:border-b hover:border-b-comment cursor-pointer ${
                isActive && "border-b border-active text-active"
              }`}
              key={tabId}
              onClick={() => onFileClick(tabId)}
            >
              <file.Icon />
              <span className="text-text">{file.displayName}</span>
              <FontAwesomeIcon
                icon={faX}
                size="xs"
                className={`cursor-pointer ${
                  isActive ? "visible" : "invisible"
                }`}
                onClick={(e) => onFileClose(tabId, e)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
