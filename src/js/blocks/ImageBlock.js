import React from "react";
// Local imports
import { kt } from "../utils/kirbytext.js";

const ImageBlock = ({ content }) => {
  const imageUrl = content.image.length > 0 ? `${content.image[0].url}` : "";
  return (
    <section className="block image">
      <div className="picture">
        <a href={imageUrl} target="_blank" className="clickable-image">
          <img src={imageUrl} className="image" />
        </a>
      </div>
      {content.text !== undefined ? (
        <small className="description">{kt(content.text)}</small>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ImageBlock;
