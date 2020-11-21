import React from "react";
import "./MainScreen.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import ThreeDModelMain from "./ThreeDModelMain";
import ThreeD from "./ThreeD";
import { useStateValue } from "./StateProvider";

function MainScreen() {
  const [{ name }] = useStateValue();

  return (
    <div className="mainScreen">
      <h1>
        Welcome to <strong>CANWASP</strong> {name?.username}
      </h1>
      <ThreeD />
      {/* <ThreeDModelMain /> */}
      <p className="mainScreen-canvasText">Wan't to know about us?</p>
      <div className="mainScreen-canvasIcon">
        <AnchorLink
          offset="90"
          href="#about"
          className="mainScreen-canvasDownIcon"
        >
          <i className="fas fa-chevron-down fa-3x"></i>
        </AnchorLink>
      </div>
    </div>
  );
}

export default MainScreen;
