import React from "react";
import "./CanvasWrapper.css";
import Canvas from "./Canvas";
import { Link } from "react-router-dom";

function CanvasWrapper() {
  return (
    <div id="canvas" className="canvasWrapper">
      <h1>FEATURED COLLECTION</h1>
      <div className="canvasWrapper-elements">
        <div className="canvasWrapper-elementsDuo">
          <Link className="canvasLink" to="/FProduct1">
            <Canvas
              image="https://images.unsplash.com/photo-1594656877277-e807ce76d9ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              name="SOOTHING"
            />
          </Link>
          <Link className="canvasLink" to="/FProduct2">
            <Canvas
              image="https://images.unsplash.com/photo-1593532847202-e818146e134a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              name="MIND BLOWING"
            />
          </Link>
        </div>
        <div className="canvasWrapper-elementsDuo">
          <Link className="canvasLink" to="/FProduct3">
            <Canvas
              image="https://images.unsplash.com/photo-1593708943966-7624a0fa871d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              name="ELECTRIC SHOCK"
            />
          </Link>
          <Link className="canvasLink" to="/FProduct4">
            <Canvas
              image="https://images.unsplash.com/photo-1595461701986-7ddd33b84392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1063&q=80"
              name="ORANGE SUN"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CanvasWrapper;
