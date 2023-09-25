import { jsxToString } from "./jsxToString";

export const buildStringFromJsxArray = (jsxArray: JSX.Element[]) => {
  return jsxArray.map(jsxToString).join(" ");
};
