import { Component } from "@/type";
import { hash } from "@/utils";
import EditorProvider, { NumberedLine } from "../editor";

const Tutorial: Component = () => {
  return (
    <EditorProvider>
      <NumberedLine>
        <pre className="text-comment">
          {`/**
 * Hey there, thanks for coming.
 *
 * Navigate with either Vim bindings or mouse clicks.
 * 
 * Hope you will enjoy the experience :)
 */`}
        </pre>
      </NumberedLine>
    </EditorProvider>
  );
};

Tutorial.displayName = "Tutorial";
Tutorial.id = hash(Tutorial.displayName);

export default Tutorial;
