import { Component } from "@/type";
import { hash } from "@/utils";
import EditorProvider, { NumberedLine, Syntax } from "../editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

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
Tutorial.path = "src/components/programs/portfolio/files/Tutorial.tsx";
Tutorial.id = hash(Tutorial.displayName);
Tutorial.Icon = function Icon(props) {
  return <FontAwesomeIcon icon={faReact} color="#61dbfb" {...props} />;
};

export default Tutorial;
