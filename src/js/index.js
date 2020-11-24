import React from "react";
import ReactDOM from "react-dom";

const Artwork = () => {
  return (
    <div>
      <h1>Artwork</h1>
    </div>
  );
};

const mount = document.querySelector("#mount");
ReactDOM.render(<Artwork />, mount);
