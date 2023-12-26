import React, { useContext } from "react";
import { EditorContext } from ".";

interface NumberedLineProps {
  children?: React.ReactNode;
}

const NumberedLine = ({ children }: NumberedLineProps) => {
  const { ids, setIds, activeId } = useContext(EditorContext);
  const id = React.useId();

  React.useEffect(() => {
    setIds((prev) => [...prev, id]);
  }, [id, setIds]);

  return (
    <div
      className={`w-full flex gap-x-6 ${
        id === activeId && "bg-comment-variant bg-opacity-30"
      }`}
    >
      <div className="w-4 text-right align-top">
        <span className="text-comment text-sm">{ids.indexOf(id)}</span>
      </div>
      {children}
    </div>
  );
};

export default NumberedLine;
