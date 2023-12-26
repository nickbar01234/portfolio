"use client";
import React from "react";

interface EditorProviderProps {
  children?: React.ReactNode;
}

interface EditorContext {
  ids: string[];
  setIds: React.Dispatch<React.SetStateAction<string[]>>;
  activeId: string;
}

export const EditorContext = React.createContext<EditorContext>(
  {} as EditorContext
);

const EditorProvider = (props: EditorProviderProps) => {
  const [ids, setIds] = React.useState<string[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    if (ids.length > 0 && activeId === "") {
      setActiveId(ids[0]);
    }
  }, [ids, activeId]);

  return (
    <EditorContext.Provider
      value={{ ids: ids, setIds: setIds, activeId: activeId }}
    >
      <div className="relative z-0 flex flex-col h-full pl-2">
        <div className="h-full overflow-y-auto scrollbar">{props.children}</div>
      </div>
    </EditorContext.Provider>
  );
};

export default EditorProvider;
