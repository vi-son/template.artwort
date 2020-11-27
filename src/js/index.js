import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// Local imports
import { get } from "./api.js";
import TextBlock from "./blocks/TextBlock.js";
import ImageBlock from "./blocks/ImageBlock.js";
import ImageGridBlock from "./blocks/ImageGridBlock.js";
import AudioBlock from "./blocks/AudioBlock.js";
import ReferencesBlock from "./blocks/ReferencesBlock.js";
import VideoEmedBlock from "./blocks/VideoEmbedBlock.js";
import HyperlinkBlock from "./blocks/CiteBlock.js";
import CiteBlock from "./blocks/CiteBlock.js";
import PodcastBlock from "./blocks/PodcastBlock.js";

// Style imports
import "../sass/index.sass";

const Artwork = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    get(`/pages/audiovis-io`).then(d => {
      // setContent(d);
      setBlocks(d.content.blocks);
      console.log(d.content.blocks);
    });
  }, []);

  return (
    <>
      <div className="canvas-wrapper">
        <canvas />
        <button onClick={() => setShowDetails(!showDetails)}>i</button>
      </div>
      <div
        className={["layout-artwork", showDetails ? "visible" : "hidden"].join(
          " "
        )}
      >
        <h1>Artwork</h1>
        <p>Details</p>
        {blocks.map(block => {
          switch (block._key) {
            case "textblock":
              return <TextBlock key={block._uid} content={block} />;
              break;
            case "imageblock":
              return <ImageBlock key={block._uid} content={block} />;
              break;
            case "imagegrid":
              return <ImageGridBlock key={block._uid} content={block} />;
              break;
            case "audioblock":
              return <AudioBlock key={block._uid} content={block} />;
              break;
            case "references":
              return <ReferencesBlock key={block._uid} content={block} />;
              break;
            case "videoembed":
              return <VideoEmedBlock key={block._uid} content={block} />;
              break;
            case "hyperlinks":
              return <HyperlinkBlock key={block._uid} content={block} />;
              break;
            case "citeblock":
              return <CiteBlock key={block._uid} content={block} />;
              break;
            case "podcastblock":
              return <PodcastBlock key={block._uid} content={block} />;
              break;
            default:
              return <section key={block._uid}>{block._key}</section>;
              break;
          }
        })}
      </div>
    </>
  );
};

const mount = document.querySelector("#mount");
ReactDOM.render(<Artwork />, mount);
