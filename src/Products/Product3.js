import React from "react";
import CanvasInfo from "../Product33D/CanvasInfo3";

function Product3() {
  return (
    <div className="product3">
      <CanvasInfo
        id={7}
        name="AMAZING NEW YORK"
        image={"/images/NYC.jpg"}
        priceIndia={650}
        // priceNotIndia={149.49}
      />
    </div>
  );
}

export default Product3;
