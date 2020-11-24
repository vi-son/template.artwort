import React, { useState } from "react";
import ReactDOM from "react-dom";
// Style imports
import "../sass/index.sass";

const Artwork = () => {
  const [showDetails, setShowDetails] = useState(false);

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
      </div>
    </>
  );
};

const mount = document.querySelector("#mount");
ReactDOM.render(<Artwork />, mount);
