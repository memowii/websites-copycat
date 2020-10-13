import React, { useRef, useEffect } from "react";
import "highlight.js/styles/dark.css";

export const Highlight = ({ content, language, hljs }) => {
  const node = useRef(null);

  useEffect(() => {
    const nodes = node.current.querySelectorAll("pre code");
    nodes.forEach((node) => {
      hljs.highlightBlock(node);
    });
  });

  const wrapContent = (content) => {
    const template = `
    <pre>
      <code class="{language}">
{content}
      </code>
    </pre>`;

    return template
      .replace("{language}", language)
      .replace("{content}", content);
  };

  return (
    <div
      className="Highlight my-8"
      ref={node}
      dangerouslySetInnerHTML={{ __html: wrapContent(content) }}
    />
  );
};
