import React from "react";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";

import { Highlight } from "./Highlight";

hljs.registerLanguage("bash", bash);

export const HighlightBash = ({ content }) => (
  <Highlight content={content} language="bash" hljs={hljs} />
);
