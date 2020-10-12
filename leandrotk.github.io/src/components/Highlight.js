import React, { useRef, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/dark.css";

// hljs.registerLanguage("bash", bash);
hljs.registerLanguage("json", json);

export const Highlight = ({ content }) => {
  const node = useRef(null);

  useEffect(() => {
    const nodes = node.current.querySelectorAll("pre code");
    nodes.forEach((node) => {
      hljs.highlightBlock(node);
    });
  });

  return <div ref={node} dangerouslySetInnerHTML={{ __html: content }} />;
};
