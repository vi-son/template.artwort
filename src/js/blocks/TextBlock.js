import React from "react";
// Local imports
import { kt } from "../utils/kirbytext.js";

const TextBlock = ({ content }) => {
  return (
    <section className="block-text">
      {content.preheadline !== undefined ? (
        <h4 className="preheading">{content.preheadline}</h4>
      ) : (
        <></>
      )}
      {content.headline !== undefined ? (
        <h2 className="heading">{content.headline}</h2>
      ) : (
        <></>
      )}
      {content.text !== undefined ? (
        <article className="text">{kt(content.text)}</article>
      ) : (
        <></>
      )}
    </section>
  );
};

export default TextBlock;
