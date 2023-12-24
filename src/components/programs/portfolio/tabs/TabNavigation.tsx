import { Component } from "@/type";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TabNavigationProps {
  tabs: Component[];
  activeId: string;
}

const TabNavigation = (props: TabNavigationProps) => {
  const { tabs, activeId } = props;

  const onTabSelect = React.useCallback(() => {
    console.log("Tab select");
  }, []);

  const onTabClose = React.useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("Tab closed");
  }, []);

  return (
    <div className="w-full bg-bg z-50">
      <div className="flex gap-x-4">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
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

export default TabNavigation;
