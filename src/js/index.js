import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// Local imports
import { get } from "./api.js";
import Narrative from "./components/Narrative.js";

// Style imports
import "../sass/index.sass";

const Artwork = () => {
  const [showNarrative, setShowNarrative] = useState(false);
  const [content, setContent] = useState({});

  useEffect(() => {
    console.group("Version");
    console.log(process.env.VERSION);
    console.groupEnd();
    get(`/pages/audiovis-io`).then(d => {
      setContent(d.content);
    });
  }, []);

  return (
    <>
      <div className="canvas-wrapper">
        <canvas />
        <button
          className="emoji btn-details"
          onClick={() => setShowNarrative(!showNarrative)}
        >
          📖
        </button>
      </div>
      <button
        className={[
          "btn-close-details",
          "emoji",
          showNarrative ? "visible" : "hidden"
        ].join(" ")}
        onClick={() => setShowNarrative(false)}
      >
        {window.matchMedia("(max-width: 768px)").matches ? (
          <span>👆</span>
        ) : (
          <span>👈</span>
        )}
      </button>
      <Narrative show={showNarrative} content={content} />
    </>
  );
};

const mount = document.querySelector("#mount");
ReactDOM.render(<Artwork />, mount);
