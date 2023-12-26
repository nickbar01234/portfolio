"use client";

import { Component } from "@/type";
import React from "react";
import { About, Tutorial } from "./portfolio/files";
import App from "./portfolio";

interface PortfolioContext {
  files: Component[];

  tabs: Component[];
  setTabs: React.Dispatch<React.SetStateAction<Component[]>>;

  activeTabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;

  popups: {
    directory: {
      display: boolean;
      setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
    };

    help: {
      display: boolean;
      setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
    };
  };
}

const FILES = [Tutorial, About];

const PortfolioContext = React.createContext<PortfolioContext>(
  {} as PortfolioContext
);

const Portfolio = () => {
  const [tabs, setTabs] = React.useState([Tutorial]);
  const [activeTabId, setActiveTabId] = React.useState(Tutorial.id);
  const [displayDirectory, setDisplayDirectory] = React.useState(false);
  const [displayHelp, setDisplayHelp] = React.useState(false);

  return (
    <PortfolioContext.Provider
      value={{
        files: FILES,
        tabs,
        setTabs,
        activeTabId,
        setActiveTabId,
        popups: {
          directory: {
            display: displayDirectory,
            setDisplay: setDisplayDirectory,
          },
          help: {
            display: displayHelp,
            setDisplay: setDisplayHelp,
          },
        },
      }}
    >
      <App />
    </PortfolioContext.Provider>
  );
};

export default Portfolio;
export { PortfolioContext };
