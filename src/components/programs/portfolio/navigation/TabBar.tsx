import { Component } from "@/type";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TabNavigationProps {
  tabs: Component[];
  setTabs: React.Dispatch<React.SetStateAction<Component[]>>;
  activeTabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
}

const TabBar = (props: TabNavigationProps) => {
  const { tabs, setTabs, activeTabId, setActiveTabId } = props;

  const onTabSelect = React.useCallback(
    (id: string) => {
      setActiveTabId(id);
    },
    [setActiveTabId]
  );

  const onTabClose = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      setTabs((tabs) => tabs.filter((tab) => tab.id !== activeTabId));
      // TODO(nickbar01234) - Add history stack
      setActiveTabId((prev) => tabs.find((tab) => tab.id !== prev)?.id ?? "");
    },
    [tabs, activeTabId, setTabs, setActiveTabId]
  );

  return (
    <div className="relative z-20 w-full bg-bg">
      <div className="flex gap-x-4">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <div
              className={`text-sm flex items-center gap-x-1.5 hover:comment-variant hover:border-b hover:border-b-comment cursor-pointer ${
                isActive && "border-b border-active text-active"
              }`}
              key={tab.id}
              onClick={() => onTabSelect(tab.id)}
            >
              <tab.Icon className="" />
              <span className="text-text">{tab.displayName}</span>
              <FontAwesomeIcon
                icon={faX}
                size="xs"
                className={`cursor-pointer ${
                  isActive ? "visible" : "invisible"
                }`}
                onClick={onTabClose}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
