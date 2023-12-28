import { Component } from "@/type";
import { hash } from "@/utils";
import EditorProvider, { NumberedLine, Syntax } from "../editor";

const Skills: Component = ({ active, typingCommand }) => {
  return (
    <EditorProvider active={active} typingCommand={typingCommand}>
      <NumberedLine>
        <pre className="text-keyword">{"{"}</pre>
      </NumberedLine>
      <NumberedLine ident={0}>
        <pre>
          <Syntax.String>Language</Syntax.String>
        </pre>
      </NumberedLine>
      <NumberedLine>
        <pre className="text-keyword">{"}"}</pre>
      </NumberedLine>
    </EditorProvider>
  );
};

Skills.displayName = "Skills";
Skills.path = "src/components/programs/portfolio/files";
Skills.id = hash(Skills.displayName);
Skills.Icon = function Icon(className) {
  return <i className={`text-active ${className}`}>{`{...}`}</i>;
};

export default Skills;
