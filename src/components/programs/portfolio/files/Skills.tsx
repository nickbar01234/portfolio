import { Component } from "@/type";
import { hash, timeBetween } from "@/utils";
import EditorProvider, { NumberedLine, Syntax } from "../editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

export const FIRST_SWE_INTERNSHIP = new Date("2022-06-01");

export const PROGRAMMING_LANGUAGES = [
  {
    icon: faPython,
    name: "Python",
  },
  {
    icon: faJava,
    name: "Java",
  },
  {
    icon: faJs,
    name: "JavaScript",
  },
  {
    icon: faHtml5,
    name: "HTML5",
  },
  {
    icon: faCss3,
    name: "CSS",
  },
];

export const DOMAINS = ["frontend", "backend", "infra"];

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
                {PROGRAMMING_LANGUAGES.map((pl, idx) => (
                  <React.Fragment key={idx}>
                    {"    "}
                    {
                      <Syntax.Statement
                        delim={
                          idx < PROGRAMMING_LANGUAGES.length - 1 ? "," : ""
                        }
                      >
                        <FontAwesomeIcon icon={pl.icon} size="lg" />{" "}
                        <span>{pl.name}</span>
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
Skills.path = "src/components/programs/portfolio/files/Skills.tsx";
Skills.id = hash(Skills.displayName);
Skills.Icon = function Icon(style) {
  return <i className={`text-active ${style}`}>{`{...}`}</i>;
};

export default Skills;
