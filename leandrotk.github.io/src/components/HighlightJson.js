import React from "react";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";

import { Highlight } from "./Highlight";

hljs.registerLanguage("json", json);

export const HighlightJson = ({ content }) => (
  <Highlight content={content} language="json" hljs={hljs} />
);
