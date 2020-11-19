import React, { useEffect } from "react";
import "./Splash.css";

function Splash({ name, image }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".splash").classList.add("display-none");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash">
      <img src={image} alt="marvel logo" />
      {/* <div className="splash-name">
        <h2 className="fade-in">WELCOME TO</h2>
        <h1 className="fade-in">{name}</h1>
      </div> */}
    </div>
  );
}

export default Splash;
