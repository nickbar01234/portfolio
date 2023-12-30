import { Component } from "@/type";
import { hash, timeBetween } from "@/utils";
import EditorProvider, { NumberedLine, Syntax } from "../editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  DOMAINS,
  FIRST_SWE_INTERNSHIP,
  PROGRAMMING_LANGUAGES,
} from "../constants";

const Skills: Component = ({ active, typingCommand }) => {
  const yoe = React.useMemo(() => {
    const { year } = timeBetween(FIRST_SWE_INTERNSHIP);
    return year;
  }, []);

  return (
    <EditorProvider active={active} typingCommand={typingCommand}>
      <NumberedLine>
        <pre className="text-keyword">{"{"}</pre>
      </NumberedLine>
      <NumberedLine ident={0}>
        <pre>
          <Syntax.Statement delim=",">
            <Syntax.String>Years of Experience</Syntax.String>
            <Syntax.Comment>:</Syntax.Comment> <Syntax.Id>{yoe}</Syntax.Id>
          </Syntax.Statement>{" "}
          <Syntax.Comment># and counting...</Syntax.Comment>
        </pre>
      </NumberedLine>
      <NumberedLine ident={0}>
        <pre>
          <Syntax.Statement delim=",">
            <Syntax.String>Programming Languages</Syntax.String>
            <Syntax.Comment>:</Syntax.Comment>{" "}
            <Syntax.Paren1 open="[" close="]">
              <pre>
                {PROGRAMMING_LANGUAGES.map((icon, idx) => (
                  <React.Fragment key={idx}>
                    {"    "}
                    {
                      <Syntax.Statement
                        delim={
                          idx < PROGRAMMING_LANGUAGES.length - 1 ? "," : ""
                        }
                      >
                        <FontAwesomeIcon icon={icon} size="lg" />
                      </Syntax.Statement>
                    }
                    {"\n"}
                  </React.Fragment>
                ))}
              </pre>
            </Syntax.Paren1>
          </Syntax.Statement>
        </pre>
      </NumberedLine>
      <NumberedLine ident={0}>
        <pre>
          <Syntax.Statement delim=",">
            <Syntax.String>Domains</Syntax.String>
            <Syntax.Comment>:</Syntax.Comment>{" "}
            <Syntax.Paren1 open="{" close="}">
              <pre>
                {DOMAINS.map((domain, idx) => (
                  <React.Fragment key={idx}>
                    {"    "}
                    {
                      <Syntax.Statement
                        delim={
                          idx < PROGRAMMING_LANGUAGES.length - 1 ? "," : ""
                        }
                      >
                        <Syntax.String>{domain}</Syntax.String>
                        <Syntax.Comment>:</Syntax.Comment>{" "}
                        <Syntax.Id>true</Syntax.Id>
                      </Syntax.Statement>
                    }
                    {"\n"}
                  </React.Fragment>
                ))}
              </pre>
            </Syntax.Paren1>
          </Syntax.Statement>
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
Skills.Icon = function Icon(style) {
  return <i className={`text-active ${style}`}>{`{...}`}</i>;
};

export default Skills;
