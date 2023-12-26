import { Component } from "@/type";
import { hash } from "@/utils";
import EditorProvider, { NumberedLine, Syntax } from "../editor";

const Tutorial: Component = ({ active, typingCommand }) => {
  return (
    <EditorProvider active={active} typingCommand={typingCommand}>
      <NumberedLine>
        <pre className="text-comment">{"/**"}</pre>
      </NumberedLine>
      <NumberedLine>
        <pre className="text-comment">
          {" * A collection of editors and themes I like."}
        </pre>
      </NumberedLine>
      <NumberedLine>
        <pre className="text-comment">{" *"}</pre>
      </NumberedLine>
      <NumberedLine>
        <pre className="text-comment">
          {" * Navigate with mouse or type "}
          <Syntax.Keyword>:help</Syntax.Keyword>
        </pre>
      </NumberedLine>
      <NumberedLine>
        <pre className="text-comment">{" * to move with Vim."}</pre>
      </NumberedLine>
      <NumberedLine>
        <pre className="text-comment">{" */"}</pre>
      </NumberedLine>
    </EditorProvider>
  );
};

Tutorial.displayName = "Tutorial";
Tutorial.id = hash(Tutorial.displayName);

export default Tutorial;
