import { Component } from "@/type";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TabNavigationProps {
  tabs: Component[];
  setTabs: React.Dispatch<React.SetStateAction<Component[]>>;
  activeTabId: string;
}

const TabBar = (props: TabNavigationProps) => {
  const { tabs, setTabs, activeTabId } = props;

  const onTabSelect = React.useCallback(() => {
    console.log("Tab select");
  }, []);

  const onTabClose = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      setTabs((tabs) => tabs.filter((tab) => tab.id !== activeTabId));
    },
    [activeTabId, setTabs]
  );

  return (
    <div className="relative z-50 w-full bg-bg">
      <div className="flex gap-x-4">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <div
              className={`text-sm flex items-center gap-x-1.5 hover:text-[#535763] hover:border-b hover:border-b-comment cursor-pointer ${
                isActive && "border-b border-active text-active"
              }`}
              key={tab.id}
              onClick={onTabSelect}
            >
              <FontAwesomeIcon icon={faReact} color="#61dbfb" />
              <span className="text-text">{tab.displayName}</span>
              {isActive && (
                <FontAwesomeIcon
                  icon={faX}
                  size="xs"
                  className="cursor-pointer"
                  onClick={onTabClose}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
