import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export function render(url) {
  const appHTML = renderToString(<App url={url} />); // renderToString creates the HTML markup for the requested URL.
  return appHTML;
}
