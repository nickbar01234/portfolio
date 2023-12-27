/**
 * Credit - http://www.ascii-art.de/ascii/c/coffee.txt
 */
import { Component } from "@/type";
import { hash } from "@/utils";
import React, { useState } from "react";
import EditorProvider, { NumberedLine, Syntax } from "../editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const About: Component = ({ active, typingCommand }) => {
  const [procastinateFor, setProcastinateFor] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProcastinateFor((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

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
      {  }
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
      <NumberedLine>
        <pre>
          <Syntax.Decl>var</Syntax.Decl> <Syntax.Id>work</Syntax.Id>{" "}
          <Syntax.Keyword>= ()</Syntax.Keyword>{" "}
          <Syntax.Keyword>=&gt;</Syntax.Keyword>{" "}
          <Syntax.Call>setTimeout</Syntax.Call>
          <Syntax.Paren1>
            <Syntax.Text>procastinate</Syntax.Text>
            <Syntax.Comment>,</Syntax.Comment> <Syntax.Id>0</Syntax.Id>
          </Syntax.Paren1>
          <Syntax.Comment>;</Syntax.Comment>
        </pre>
      </NumberedLine>
      <NumberedLine>
        <pre>
          <Syntax.Decl>var</Syntax.Decl> <Syntax.Id>procastinate</Syntax.Id>{" "}
          <Syntax.Keyword>= ()</Syntax.Keyword>{" "}
          <Syntax.Keyword>=&gt;</Syntax.Keyword>{" "}
          <Syntax.Call>setTimeout</Syntax.Call>
          <Syntax.Paren1>
            <Syntax.Text>work</Syntax.Text>
            <Syntax.Comment>,</Syntax.Comment>{" "}
            <Syntax.Id className="animate-pulse">{procastinateFor}</Syntax.Id>
          </Syntax.Paren1>
          <Syntax.Comment>;</Syntax.Comment>
        </pre>
      </NumberedLine>
      <NumberedLine>
        <pre>
          <Syntax.Call>work</Syntax.Call>
          <Syntax.Paren1 />
          <Syntax.Comment>;</Syntax.Comment>
        </pre>
      </NumberedLine>
    </EditorProvider>
  );
};

About.displayName = "About";
About.path = "src/components/programs/portfolio/files/About.tsx";
About.id = hash(About.displayName);
About.Icon = function Icon(props) {
  return <FontAwesomeIcon icon={faReact} color="#61dbfb" {...props} />;
};

export default About;
