import React, { useContext } from "react";
import { EditorContext } from ".";

interface NumberedLineProps {
  children?: React.ReactNode;
}

const NumberedLine = ({ children }: NumberedLineProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { ids, setIds, activeId, setActiveId } = useContext(EditorContext);
  const id = React.useId();

  React.useEffect(() => {
    setIds((prev) => [...prev, id]);
  }, [id, setIds]);

  React.useEffect(() => {
    if (id === activeId && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [activeId, id]);

  return (
    <div
      className={`w-full flex sm:gap-x-6 gap-x-2 ${
        id === activeId && "bg-comment-variant bg-opacity-30"
      }`}
      onClick={() => setActiveId(id)}
      ref={ref}
    >
      <div className="w-4 text-right align-top">
        <span className="text-comment text-sm">{ids.indexOf(id)}</span>
      </div>
      {children}
    </div>
  );
};

export default NumberedLine;
