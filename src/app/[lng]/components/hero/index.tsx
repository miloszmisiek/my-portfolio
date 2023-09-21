"use client";

import ReactDOMServer from "react-dom/server";
import Typewriter, { TypewriterClass } from "typewriter-effect";

const jsxToString = (jsx: JSX.Element) => ReactDOMServer.renderToString(jsx);

const buildStringFromJsxArray = (jsxArray: JSX.Element[]) => {
  return jsxArray.map(jsxToString).join(" ");
};

const DATA = [
  { key: "profession", value: "'Frontend Developer'," },
  { key: "location", value: "'Szczecin, Poland'," },
  { key: "yearsOfExperience", value: "1," },
  { key: "techStack", value: "[", pause: 0 },
  // Add more here
];
const TECH_STACK = ["JavaScript", "Typescript", "React", "Redux", "NextJS 13"];
const SHORT_INDENTATION = "<span>&emsp;&emsp;</span>";
const LONG_INDENTATION = "<span>&emsp;&emsp;&emsp;&emsp;</span>";
const PAUSE = 2000;

export default function Hero() {
  const elements = [
    <span style={{ color: "var(--const)" }}>const</span>,
    <span style={{ color: "var(--variable)" }}>MILOSZ_MISIEK</span>,
    <span style={{ color: "var(--operatorsAndComma)" }}>=</span>,
    <span style={{ color: "var(--curlyBrace)" }}>
      {"{"}
      <br />
    </span>,
  ];

  // Use utility function to build full string
  const fullString = buildStringFromJsxArray(elements);
  const typeInfo = (
    typewriter: TypewriterClass,
    key: string,
    value: string,
    pause: number,
    indentation: string
  ) => {
    typewriter
      .pasteString(indentation, null)
      .typeString(`${key}: `)
      .pauseFor(pause)
      .typeString(`${value}<br/>`);
  };

  const typeStack = (
    typewriter: TypewriterClass,
    tech: string,
    pause: number,
    indentation: string
  ) => {
    typewriter
      .pasteString(indentation, null)
      .pauseFor(pause)
      .typeString(`'${tech}',<br/>`);
  };

  const constStringElement = (
    <span style={{ color: "var(--const)" }}>const</span>
  );
  const constString = ReactDOMServer.renderToString(constStringElement);
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(fullString);
        //   .callFunction(() => {
        //     console.log("String typed out!");
        //   })
        DATA.forEach((item) => {
          typeInfo(
            typewriter,
            item.key,
            item.value,
            item.pause ?? PAUSE,
            SHORT_INDENTATION
          );
        });
        TECH_STACK.forEach((item) => {
          typeStack(typewriter, item, PAUSE, LONG_INDENTATION);
        });

        //   .deleteAll()
        //   .callFunction(() => {
        //     console.log("All strings were deleted");
        //   })
        typewriter
          .pasteString(SHORT_INDENTATION, null)
          .typeString("],<br/>")
          .typeString("};<br/>")
          .start();
      }}
    />
  );
}
