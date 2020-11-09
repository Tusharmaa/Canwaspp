import React from "react";
import Navbar from "./Navbar";
import MainScreen from "./MainScreen";
import About from "./About";
import CanvasWrapper from "./CanvasWrapper";
import CanvasButton from "./CanvasButton";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function AppWrapper() {
  return (
    <div className="appWrapper">
      <Navbar />
      <MainScreen />
      <About />
      <CanvasWrapper />
      <CanvasButton />
      <Footer />
    </div>
  );
}

export default AppWrapper;
