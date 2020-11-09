import React from "react";
import CanvasInfo from "../Product53D/CanvasInfo5";

function Product5() {
  return (
    <div className="product5">
      <CanvasInfo
        id={9}
        name="IRONMAN"
        image={"/images/Ironman.jpg"}
        priceIndia={2000}
        // priceNotIndia={46.99}
      />
    </div>
  );
}

export default Product5;
