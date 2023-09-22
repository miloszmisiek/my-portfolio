"use client";

import ReactDOMServer from "react-dom/server";
import Typewriter, { TypewriterClass } from "typewriter-effect";

const jsxToString = (jsx: JSX.Element) => ReactDOMServer.renderToString(jsx);

const buildStringFromJsxArray = (jsxArray: JSX.Element[]) => {
  return jsxArray.map(jsxToString).join(" ");
};

const styleValues = (value: string | number) =>
  jsxToString(
    <span
      style={{
        color: `var(--${
          typeof value === "number"
            ? "numbers"
            : value === "["
            ? "arrays"
            : "strings"
        })`,
      }}
    >
      {value}
    </span>
  );

const DATA = [
  { key: "profession", value: "'Frontend Developer'" },
  { key: "location", value: "'Szczecin, Poland'" },
  { key: "yearsOfExperience", value: 1 },
  { key: "techStack", value: "[", pause: 0 },
  // Add more here
];
const TECH_STACK = ["JavaScript", "Typescript", "React", "Redux", "NextJS 13"];
const SHORT_INDENTATION = "<span>&emsp;&emsp;</span>";
const LONG_INDENTATION = "<span>&emsp;&emsp;&emsp;&emsp;</span>";
const PAUSE = 2000;

const ELEMENTS = [
  <span style={{ color: "var(--const)" }}>const</span>,
  <span style={{ color: "var(--variable)" }}>MILOSZ_MISIEK</span>,
  <span style={{ color: "var(--operatorsAndComma)" }}>=</span>,
  <span style={{ color: "var(--curlyBrace)" }}>
    {"{"}
    <br />
  </span>,
];

export default function Hero() {
  const parseKeyElements = (key: string) =>
    jsxToString(
      <span style={{ color: "var(--objectKeys)" }}>{key + ": "}</span>
    );
  const parseTechStackElements = (item: string) =>
    jsxToString(<span style={{ color: "var(--strings)" }}>{`'${item}'`}</span>);

  // Use utility function to build full string
  const fullString = buildStringFromJsxArray(ELEMENTS);
  const typeInfo = (
    typewriter: TypewriterClass,
    key: string,
    value: string | number,
    pause: number,
    indentation: string,
    lastItem?: boolean
  ) => {
    typewriter
      .pasteString(indentation, null)
      .typeString(parseKeyElements(key))
      .pauseFor(pause)
      .typeString(`${styleValues(value) + (lastItem ? "" : ",")}<br/>`);
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
      .typeString(`${parseTechStackElements(tech)},<br/>`);
  };
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(fullString);
        //   .callFunction(() => {
        //     console.log("String typed out!");
        //   })
        DATA.forEach((item, idx, array) => {
          const lastItem = idx === array.length - 1;
          typeInfo(
            typewriter,
            item.key,
            item.value,
            item.pause ?? PAUSE,
            SHORT_INDENTATION,
            lastItem
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
          .typeString(
            jsxToString(<span style={{ color: "var(--arrays)" }}>]</span>) +
              ",<br/>"
          )
          .typeString(
            jsxToString(
              <span style={{ color: "var(--curlyBrace)" }}>{"}"}</span>
            ) + ";<br/>"
          )
          .start();
      }}
    />
  );
}
