import { Component } from "@/type";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TabNavigationProps {
  tabs: Component[];
  activeId: string;
}

const TabNavigation = (props: TabNavigationProps) => {
  const { tabs, activeId } = props;
  return (
    <div className="w-full flex gap-x-4">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <div
            className={`text-sm flex items-center gap-x-1.5 hover:text-[#535763] hover:border-b hover:border-b-comment ${
              isActive && "border-b border-active text-active"
            }`}
            key={tab.id}
          >
            <FontAwesomeIcon icon={faReact} color="#61dbfb" />
            <span className="text-text">{tab.displayName}</span>
            {isActive && (
              <FontAwesomeIcon
                icon={faX}
                size="xs"
                className="cursor-pointer"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TabNavigation;
