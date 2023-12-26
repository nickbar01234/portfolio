"use client";

import { HelpMenu, Footer, PopUp } from "./editor";
import React from "react";
import { SideBar, TabBar } from "./navigation";
import { useClosePortfolio } from "@/hooks";
import { useCommandListener } from "@/hooks/vim";
import { Component } from "@/type";
import Directory from "./navigation/Directory";
import { PortfolioContext } from "..";

const App = () => {
  const {
    files,
    tabs,
    setTabs,
    activeTabId,
    setActiveTabId,
    popups: { directory, help },
  } = React.useContext(PortfolioContext);
  const { setDisplay: setDisplayDirectory } = directory;
  const { display: displayHelp, setDisplay: setDisplayHelp } = help;

  const { command, listening: commandListenerActive } = useCommandListener({});

  const onFileClick = (file: Component) => {
    setTabs((prev) =>
      prev.find((tab) => tab.id === file.id) ? prev : [...prev, file]
    );
    setActiveTabId(file.id);
    setDisplayDirectory(false);
  };

  useClosePortfolio({ tabs });

  return (
    <div className="h-full w-full grid grid-cols-[4%_96%]">
      <HelpMenu displayHelp={displayHelp} setDisplayHelp={setDisplayHelp} />
      <Directory onFileClick={onFileClick} />
      <div className="h-full w-full bg-bg-variant py-2 border-r-2 border-r-bg-highlight">
        <SideBar setTabs={setTabs} setActiveTabId={setActiveTabId} />
      </div>
      <div className="h-full w-full grid grid-rows-[5%_87%_8%] overflow-y-hidden overscroll-none overflow-x-auto scrollbar">
        <div className="pt-2 pl-2">
          <TabBar
            tabs={tabs}
            setTabs={setTabs}
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
          />
        </div>
        {tabs.length === 0 ? (
          <div></div>
        ) : (
          files.map((File) => (
            <File
              active={File.id === activeTabId}
              key={File.id}
              typingCommand={commandListenerActive}
            />
          ))
        )}
        <Footer
          author="nickbar01234"
          lastModified={new Date("2023-01-01")}
          command={command}
        />
      </div>
    </div>
  );
};

export default App;
