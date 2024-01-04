"use client";
import { useVerticalMovement } from "@/hooks/vim";
import React from "react";
import { Hideable, NumberedLine } from ".";

interface EditorProviderProps {
  children?: React.ReactNode;
  active: boolean;
  typingCommand: boolean;
}

interface EditorContext {
  ids: string[];
  setIds: React.Dispatch<React.SetStateAction<string[]>>;
  activeId: string;
  setActiveId: React.Dispatch<React.SetStateAction<string>>;
}

export const EditorContext = React.createContext<EditorContext>(
  {} as EditorContext
);

const EditorProvider = (props: EditorProviderProps) => {
  const { active, typingCommand } = props;
  const [ids, setIds] = React.useState<string[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    if (ids.length > 0 && activeId === "") {
      setActiveId(ids[0]);
    }
  }, [ids, activeId]);

  useVerticalMovement({
    ids,
    activeId,
    setActiveId,
    shouldListen: active && !typingCommand,
  });

  return (
    <Hideable active={active}>
      <EditorContext.Provider
        value={{
          ids: ids,
          setIds: setIds,
          activeId: activeId,
          setActiveId: setActiveId,
        }}
      >
        <div className="relative z-0 flex flex-col h-full pl-2">
          <div className="h-full overflow-y-auto scrollbar">
            {props.children}
            <NumberedLine />
          </div>
        </div>
      </EditorContext.Provider>
    </Hideable>
  );
};

export default EditorProvider;
