import React from "react";
import CanvasInfo from "../Product63D/CanvasInfo6";

function Product6() {
  return (
    <div className="product6">
      <CanvasInfo
        id={10}
        name="JOKER"
        image={"/images/Joker.jpg"}
        priceIndia={1900}
        // priceNotIndia={49.49}
      />
    </div>
  );
}

export default Product6;
