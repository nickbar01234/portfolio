"use client";

import { HelpMenu, Footer } from "./editor";
import React from "react";
import { SideBar, TabBar } from "./navigation";
import { useClosePortfolio } from "@/hooks";
import { useCommandListener } from "@/hooks/vim";
import Directory from "./navigation/Directory";
import { PortfolioContext, RootNavigationContext } from "@/context/";
import { Loader } from "@/components/layout";

interface AppProps {
  children?: React.ReactNode;
}
const App = ({ children }: AppProps) => {
  const {
    files,
    tabs,
    activeTabId,
    popups: { directory, help },
  } = React.useContext(PortfolioContext);
  const { navigating } = React.useContext(RootNavigationContext);
  const { display: displayDirectory, setDisplay: setDisplayDirectory } =
    directory;
  const { display: displayHelp, setDisplay: setDisplayHelp } = help;
  const fileMetadata = React.useMemo(() => {
    return files.find((file) => file.displayName === activeTabId);
  }, [activeTabId, files]);

  const { command, listening: commandListenerActive } = useCommandListener({});
  useClosePortfolio({ tabs });

  return (
    <div className="h-full w-full grid sm:grid-cols-[5%_95%] sm:grid-rows-1 grid-rows-[5%_95%]">
      <HelpMenu displayHelp={displayHelp} setDisplayHelp={setDisplayHelp} />
      <Directory
        files={files}
        displayDirectory={displayDirectory}
        setDisplayDirectory={setDisplayDirectory}
      />
      <div className="h-full w-full bg-bg-variant py-2 border-r-2 border-r-bg-highlight">
        <SideBar
          displayDirectory={displayDirectory}
          setDisplayDirectory={setDisplayDirectory}
        />
      </div>
      <div className="h-full w-full grid md:grid-rows-[5%_87%_8%] grid-rows-[10%_80%_10%] overflow-y-hidden overscroll-none">
        <div className="pt-2 pl-2">
          <TabBar tabs={tabs} activeTabId={activeTabId} />
        </div>
        <Loader loading={navigating}>
          <div className="h-full w-full overflow-y-auto scrollbar">
            {children}
          </div>
        </Loader>
        <Footer
          author={fileMetadata?.author}
          lastModified={fileMetadata?.modified}
          command={command}
        />
      </div>
    </div>
  );
};

export default App;
