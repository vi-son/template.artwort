import React from "react";
// Local imports
import { kt } from "../utils/kirbytext.js";

const HyperlinkBlock = ({ content }) => {
  return (
    <section className="block hyperlinks">
      <div className="flex">
        {content.links.map((l) => {
          return (
            <a key={l.link} href={l.link} className="link" target="_blank">
              <div className="hyperlink">
                <span className="emoji">🔗</span>
                <span className="linktext">{l.text}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default HyperlinkBlock;
