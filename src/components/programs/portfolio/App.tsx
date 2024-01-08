"use client";

import { HelpMenu, Footer, PopUp } from "./editor";
import React from "react";
import { SideBar, TabBar } from "./navigation";
import { useClosePortfolio } from "@/hooks";
import { useCommandListener } from "@/hooks/vim";
import Directory from "./navigation/Directory";
import { PortfolioContext } from "@/context/";

interface AppProps {
  children?: React.ReactNode;
}
const App = ({ children }: AppProps) => {
  const {
    files,
    tabs,
    activeTabId,
    popups: { help },
  } = React.useContext(PortfolioContext);
  const { display: displayHelp, setDisplay: setDisplayHelp } = help;
  const fileMetadata = React.useMemo(() => {
    return files.find((file) => file.id === activeTabId);
  }, [activeTabId, files]);

  const { command, listening: commandListenerActive } = useCommandListener({});
  useClosePortfolio({ tabs });

  return (
    <div className="h-full w-full grid sm:grid-cols-[5%_95%] sm:grid-rows-1 grid-rows-[5%_95%]">
      <HelpMenu displayHelp={displayHelp} setDisplayHelp={setDisplayHelp} />
      <Directory />
      <div className="h-full w-full bg-bg-variant py-2 border-r-2 border-r-bg-highlight">
        <SideBar />
      </div>
      <div className="h-full w-full grid md:grid-rows-[5%_87%_8%] grid-rows-[10%_80%_10%] overflow-y-hidden overscroll-none">
        <div className="pt-2 pl-2">
          <TabBar tabs={tabs} activeTabId={activeTabId} />
        </div>
        <div className="h-full w-full overflow-y-auto scrollbar">
          {children}
        </div>
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
