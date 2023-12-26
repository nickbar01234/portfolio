import { Component } from "@/type";
import { hash } from "@/utils";
import EditorProvider, { NumberedLine } from "../editor";

const Tutorial: Component = ({ active, typingCommand }) => {
  return (
    <EditorProvider active={active} typingCommand={typingCommand}>
      <NumberedLine>
        <pre className="text-comment">
          {`/**
 * My fav editors + themes, all in 1.
 *
 * Navigate with mouse or type`}{" "}
          <span className="text-keyword">:help</span>{" "}
          {`
 * to move with Vim.
 */`}
        </pre>
      </NumberedLine>
      <NumberedLine />
    </EditorProvider>
  );
};

Tutorial.displayName = "Tutorial";
Tutorial.id = hash(Tutorial.displayName);

export default Tutorial;
