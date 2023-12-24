"use client";
import { createContext, useState } from "react";

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
      <div className="h-full w-full pt-4">{props.children}</div>
    </EditorContext.Provider>
  );
};

export default EditorProvider;
