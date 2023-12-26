import { Component } from "@/type";
import { hash } from "@/utils";
import React from "react";
import EditorProvider, { NumberedLine } from "../editor";

const About: Component = () => {
  return (
    <EditorProvider>
      <NumberedLine>
        <pre>
          <span className="text-decl">const</span>{" "}
          <span className="text-lg text-identifier">name</span>{" "}
          <span className="text-keyword">=</span>{" "}
          <span className="text-comment">&quot;</span>
          <span className="text-lg text-active">NICK DOAN</span>
          <span className="text-comment">&quot;</span>
          <span className="text-comment">;</span>
        </pre>
      </NumberedLine>
      <NumberedLine>
        <pre>
          <span className="text-decl">let</span>{" "}
          <span className="text-lg text-identifier">age</span>{" "}
          <span className="text-keyword">=</span>{" "}
          <span className="text-lg text-identifier">undefined</span>
          <span className="text-comment">;</span>
        </pre>
      </NumberedLine>
    </EditorProvider>
  );
};

About.displayName = "About";
About.id = hash(About.displayName);

export default About;
