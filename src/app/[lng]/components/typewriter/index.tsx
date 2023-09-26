"use client";

import {
  FIRST_IT_JOB,
  LONG_INDENTATION,
  PAUSE,
  SHORT_INDENTATION,
  TECH_STACK,
} from "@/app/consts";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { jsxToString } from "./tools/jsxToString";
import { buildStringFromJsxArray } from "./tools/buildStringFromJsxArray";
import {
  calculateProffesionalExperience,
  calculateYearsOfExperience,
} from "./tools/calculateYearsOfExperience";
import { styleValues } from "./tools/styleValues";

const DATA = [
  { key: "profession", value: "'Frontend Developer'" },
  { key: "location", value: "'Szczecin, Poland'" },
  {
    key: "professionalExperience",
    value: calculateYearsOfExperience(FIRST_IT_JOB),
  },
  { key: "techStack", value: "[", pause: 0 },
  // Add more here
];
const ELEMENTS = [
  <span style={{ color: "var(--const)" }}>const</span>,
  <span style={{ color: "var(--variable)" }}>MILOSZ_MISIEK</span>,
  <span style={{ color: "var(--operatorsAndComma)" }}>=</span>,
  <span style={{ color: "var(--curlyBrace)" }}>
    {"{"}
    <br />
  </span>,
];

export default function TypeWriter({ onStop }: { onStop: any }) {
  const parseKeyElements = (key: string) =>
    jsxToString(
      <span style={{ color: "var(--objectKeys)" }}>{key + ": "}</span>
    );
  const parseTechStackElements = (item: string) =>
    jsxToString(<span style={{ color: "var(--strings)" }}>{`'${item}'`}</span>);

  const fullString = buildStringFromJsxArray(ELEMENTS);
  const typeInfo = (
    typewriter: TypewriterClass,
    key: string,
    value: string | number,
    pause: number,
    indentation: string,
    lastItem?: boolean
  ) => {
    const parseValue = `${styleValues(value) + (lastItem ? "" : ",")}`;
    const newExperience = `'${calculateProffesionalExperience(FIRST_IT_JOB)}'`;

    typewriter
      .pasteString(indentation, null)
      .typeString(parseKeyElements(key))
      .pauseFor(pause)
      .typeString(parseValue);

    if (key === "professionalExperience") {
      typewriter
        .pauseFor(pause)
        .deleteChars(value.toString().length + 1)
        .pauseFor(pause)
        .typeString(`${styleValues(newExperience)},`);
    }

    typewriter.typeString("<br/>");
  };

  const typeStack = (
    typewriter: TypewriterClass,
    tech: string,
    pause: number,
    indentation: string
  ) => {
    typewriter
      .pasteString(indentation, null)
      .typeString(`${parseTechStackElements(tech)},<br/>`);
  };
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.changeDelay(20).typeString(fullString);
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
          .callFunction(() => {
            onStop();
            console.log("onStop");
          })
          .start();
      }}
    />
  );
}
