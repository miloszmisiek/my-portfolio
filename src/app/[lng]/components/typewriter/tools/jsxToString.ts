import ReactDOMServer from "react-dom/server";

export const jsxToString = (jsx: JSX.Element) =>
  ReactDOMServer.renderToString(jsx);
