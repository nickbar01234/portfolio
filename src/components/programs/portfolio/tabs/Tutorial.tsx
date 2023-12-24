import { Component } from "@/type";
import { hash } from "@/utils";
import EditorProvider, { NumberedLine } from "../editor";

const Tutorial: Component = () => {
  return (
    <EditorProvider>
      <div className="h-full overflow-y-auto scrollbar">
        <NumberedLine>
          <pre className="text-comment">
            {`/**
 * Hey there, thanks for coming.
 *
 * Navigate with either Vim bindings or mouse clicks.
 * 
 * Hope you will enjoy the experience :)
 * 
 * To begin, type`}{" "}
            <span className="text-keyword">:help</span>{" "}
            {`
 */`}
          </pre>
        </NumberedLine>
        <NumberedLine>
          <pre className="text-comment">
            {`/**
 * Hey there, thanks for coming.
 *
 * Navigate with either Vim bindings or mouse clicks.
 * 
 * Hope you will enjoy the experience :)
 * 
 * To begin, type`}{" "}
            <span className="text-keyword">:help</span>{" "}
            {`
 */`}
          </pre>
        </NumberedLine>
        <NumberedLine>
          <pre className="text-comment">
            {`/**
 * Hey there, thanks for coming.
 *
 * Navigate with either Vim bindings or mouse clicks.
 * 
 * Hope you will enjoy the experience :)
 * 
 * To begin, type`}{" "}
            <span className="text-keyword">:help</span>{" "}
            {`
 */`}
          </pre>
        </NumberedLine>
        <NumberedLine />
      </div>
    </EditorProvider>
  );
};

Tutorial.displayName = "Tutorial";
Tutorial.id = hash(Tutorial.displayName);

export default Tutorial;
