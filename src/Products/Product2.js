import React from "react";
import CanvasInfo from "../Product23D/CanvasInfo2";

function Product2() {
  return (
    <div className="product2">
      <CanvasInfo
        id={6}
        name="MANNERS MAKETH MAN"
        image={"/images/Canvas2.jpg"}
        priceIndia={700}
        // priceNotIndia={123.99}
      />
    </div>
  );
}

export default Product2;
