import { jsxToString } from "./jsxToString";

export const styleValues = (value: string | number) =>
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