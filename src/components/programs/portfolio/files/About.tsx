/**
 * Credit - http://www.ascii-art.de/ascii/c/coffee.txt
 */
import { Component } from "@/type";
import { hash } from "@/utils";
import React from "react";
import EditorProvider, { NumberedLine, Syntax } from "../editor";

const About: Component = ({ active, typingCommand }) => {
  return (
    <EditorProvider active={active} typingCommand={typingCommand}>
      <NumberedLine>
        <pre>
          <Syntax.Decl>const</Syntax.Decl> <Syntax.Id>name</Syntax.Id>{" "}
          <Syntax.Keyword>=</Syntax.Keyword>{" "}
          <Syntax.Comment>&quot;</Syntax.Comment>
          <Syntax.String className="uppercase">Nick Doan</Syntax.String>
          <Syntax.Comment>&quot;</Syntax.Comment>
          <Syntax.Comment>;</Syntax.Comment>
        </pre>
      </NumberedLine>
      <NumberedLine>
        <pre>
          <Syntax.Decl>let</Syntax.Decl> <Syntax.Id>age</Syntax.Id>{" "}
          <Syntax.Keyword>=</Syntax.Keyword> <Syntax.Id>undefined</Syntax.Id>
          <Syntax.Comment>;</Syntax.Comment>
        </pre>
      </NumberedLine>
      <NumberedLine />
      <NumberedLine />
      <NumberedLine>
        <pre>
          <Syntax.Decl>let</Syntax.Decl> <Syntax.Id>coffee</Syntax.Id>{" "}
          <Syntax.Keyword>=</Syntax.Keyword>{" "}
          <Syntax.Keyword>await</Syntax.Keyword>{" "}
          <Syntax.Call>brewing</Syntax.Call>
          <Syntax.Paren1 />
          <Syntax.Comment>;</Syntax.Comment>
          {`   
    {
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
  |            (  /
  \\             y'
    \`-.._____..-'`}
        </pre>
      </NumberedLine>
      <NumberedLine />
    </EditorProvider>
  );
};

About.displayName = "About";
About.id = hash(About.displayName);

export default About;
