import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { RootNavigationContext } from "@/context";
import { FullFile } from "@/context/Portfolio";

interface TabNavigationProps {
  tabs: FullFile[];
  activeTabId: FullFile | undefined;
}

const TabBar = (props: TabNavigationProps) => {
  const { tabs, activeTabId } = props;
  const { onFileClick, onFileClose } = React.useContext(RootNavigationContext);

  return (
    <div className="relative z-20 w-full bg-bg">
      <div className="flex gap-x-4">
        {tabs.map((tab) => {
          const isActive =
            activeTabId != undefined &&
            tab.relativePath === activeTabId.relativePath;
          return (
            <div
              className={`text-sm flex items-center gap-x-1.5 hover:comment-variant hover:border-b hover:border-b-comment cursor-pointer ${
                isActive && "border-b border-active text-active"
              }`}
              key={tab.relativePath}
              onClick={() => onFileClick(tab)}
            >
              <tab.Icon />
              <span className="text-text">{tab.displayName}</span>
              <FontAwesomeIcon
                icon={faX}
                size="xs"
                className={`cursor-pointer ${
                  isActive ? "visible" : "invisible"
                }`}
                onClick={(e) => onFileClose(tab, e)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
