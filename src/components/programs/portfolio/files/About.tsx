/**
 * Credit - http://www.ascii-art.de/ascii/c/coffee.txt
 */
import { Component } from "@/type";
import { hash } from "@/utils";
import React from "react";
import EditorProvider, { NumberedLine } from "../editor";

const About: Component = ({ active }) => {
  return (
    <EditorProvider active={active}>
      <NumberedLine>
        <pre>
          <span className="text-decl">const</span>{" "}
          <span className="text-lg text-identifier">name</span>{" "}
          <span className="text-keyword">=</span>{" "}
          <span className="text-comment">&quot;</span>
          <span className="text-active uppercase">Nick Doan</span>
          <span className="text-comment">&quot;</span>
          <span className="text-comment">;</span>
        </pre>
      </NumberedLine>
      <NumberedLine>
        <pre>
          <span className="text-decl">let</span>{" "}
          <span className="text-identifier">age</span>{" "}
          <span className="text-keyword">=</span>{" "}
          <span className="text-identifier">undefined</span>
          <span className="text-comment">;</span>
        </pre>
      </NumberedLine>
      <NumberedLine />
      <NumberedLine />
      <NumberedLine>
        <div className="flex gap-x-8">
          <pre>
            <span className="text-decl">let</span>{" "}
            <span className="text-identifier">coffee</span>{" "}
            <span className="text-keyword">=</span>{" "}
            <span className="text-keyword">await</span>{" "}
            <span className="text-call">brewing</span>
            <span className="text-bracket-1">(</span>
            <span className="text-identifier">1</span>
            <span className="text-bracket-1">)</span>
            <span className="text-comment">;</span>
          </pre>
          <pre>
            {`   {
    {   }
    }_{ __{
 .-{   }   }-.
(   }     {   )
|\`-.._____..-'|
|             ;--.
|            (__  \\
|             | )  )
|             |/  /
|             /  /
|             ( /
 \\            y'
  \`-.._____..-'`}
          </pre>
        </div>
      </NumberedLine>
      <NumberedLine></NumberedLine>
    </EditorProvider>
  );
};

About.displayName = "About";
About.id = hash(About.displayName);

export default About;
