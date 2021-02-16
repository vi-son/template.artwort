import React from "react";

const Imagegrid = ({ content }) => {
  return (
    <section className="block imagegrid">
      {content.image.map((img) => {
        return (
          <a
            key={img.id}
            href={img.url}
            target="_blank"
            className="clickable-image"
          >
            <img className="image" src={img.url} />
          </a>
        );
      })}
    </section>
  );
};

export default Imagegrid;
