import React, {useEffect} from "react";
import "./MainScreen.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ThreeD from "./ThreeD";
import { useStateValue } from "./StateProvider";

function MainScreen() {
  const [{user, name }] = useStateValue();
  
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="mainScreen">
      <h1>
        Welcome to <strong>CANWASP</strong> {user ? name?.username : ""}
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
