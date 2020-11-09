import React from "react";
import "./CanvasButton.css";
import { Link } from "react-router-dom";

function CanvasButton() {
  return (
    <div className="canvasButton">
      <div className="canvas-Footer">
        <p>Wan't to see more canvas and buy them?</p>
        <Link to="/BuyCanvas">
          <button className="canvas-FooterButton">Click here</button>
        </Link>
      </div>
    </div>
  );
}

export default CanvasButton;
