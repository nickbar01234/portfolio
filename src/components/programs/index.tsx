"use client";

import { Component } from "@/type";
import React from "react";
import { About, Skills, Experience, Activity } from "./portfolio/files";
import App from "./portfolio";
import { getGithubFileMetadata } from "@/app/api";
import { REPO, USERNAME } from "./portfolio/constants";
import { Loader } from "../layout";

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

const FILES = [Activity, About, Skills, Experience];

const PortfolioContext = React.createContext<PortfolioContext>(
  {} as PortfolioContext
);

interface PortfolioProps {
  children?: React.ReactNode;
}

const Portfolio = ({ children }: PortfolioProps) => {
  const [fetching, setFetching] = React.useState(true);
  const [tabs, setTabs] = React.useState([Activity]);
  const [activeTabId, setActiveTabId] = React.useState(Activity.id);
  const [displayDirectory, setDisplayDirectory] = React.useState(false);
  const [displayHelp, setDisplayHelp] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);

  React.useEffect(() => {
    const paths = FILES.map((file) => file.path);
    getGithubFileMetadata(
      {
        body: { username: USERNAME, repo: REPO, paths: paths },
      },
      process.env.NODE_ENV === "development"
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

  return (
    <Loader loading={fetching}>
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
        <App file={children} />
      </PortfolioContext.Provider>
    </Loader>
  );
};

export default Portfolio;
export { PortfolioContext };
