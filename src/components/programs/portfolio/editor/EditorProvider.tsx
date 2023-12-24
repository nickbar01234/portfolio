"use client";
import { createContext, useState } from "react";
import { NumberedLine } from ".";

interface EditorProviderProps {
  children?: React.ReactNode;
}

interface EditorContext {
  ids: String[];
  setIds: React.Dispatch<React.SetStateAction<String[]>>;
}

export const EditorContext = createContext<EditorContext>({} as EditorContext);

const EditorProvider = (props: EditorProviderProps) => {
  const [ids, setIds] = useState<String[]>([]);

  return (
    <EditorContext.Provider value={{ ids: ids, setIds: setIds }}>
      <div className="flex flex-col h-full overflow-y-auto scrollbar pt-4 pl-2">
        {props.children}
      </div>
    </EditorContext.Provider>
  );
};

export default EditorProvider;
