"use client";

import { Component } from "@/type";
import React from "react";
import { About, Tutorial, Skills } from "./portfolio/files";
import App from "./portfolio";
import { getGithubFileMetadata } from "@/app/api";
import { REPO, USERNAME } from "./portfolio/constants";

interface File {
  File: Component;
  author: string;
  modified: Date;
}

interface PortfolioContext {
  files: File[];

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

const FILES = [Tutorial, About, Skills];

const PortfolioContext = React.createContext<PortfolioContext>(
  {} as PortfolioContext
);

const Portfolio = () => {
  const [fetching, setFetching] = React.useState(true);
  const [tabs, setTabs] = React.useState([Tutorial]);
  const [activeTabId, setActiveTabId] = React.useState(Tutorial.id);
  const [displayDirectory, setDisplayDirectory] = React.useState(false);
  const [displayHelp, setDisplayHelp] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);

  React.useEffect(() => {
    const paths = FILES.map((file) => file.path);
    getGithubFileMetadata(
      {
        body: { username: USERNAME, repo: REPO, paths: paths },
      },
      true
    ).then((res) => {
      const files: File[] = FILES.map((file) => {
        const metadata = res.find((v) => v.path === file.path);
        if (metadata === undefined) {
          return {
            File: file,
            author: USERNAME,
            modified: new Date(),
          };
        }
        return {
          File: file,
          author: metadata.author,
          modified: new Date(metadata.modified),
        };
      });
      setFiles(files);
      setFetching(false);
    });
  }, []);

  if (fetching) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <svg
          className="animate-spin h-20 w-20 text-text border-8 border-comment rounded-full border-t-text"
          viewBox="0 0 24 24"
        />
      </div>
    );
  }

  return (
    <PortfolioContext.Provider
      value={{
        files: files,
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
