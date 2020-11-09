import React from "react";
import "./Canvas.css";
// import { Link } from "react-router-dom";

function Canvas({ image, name }) {
  return (
    <div className="canvas">
      <div className="canvas-element">
        <img src={image} alt="canvasImage" />
        <hr />
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Canvas;
