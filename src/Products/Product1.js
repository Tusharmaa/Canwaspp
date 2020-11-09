import React from "react";
import CanvasInfo from "../Product13D/CanvasInfo";

function Product1() {
  return (
    <div className="product1">
      <CanvasInfo
        id={5}
        name="NEVER GIVE UP"
        image={"./images/Canvas5can.jpg"}
        priceIndia={1800}
        // priceNotIndia={112}
      />
    </div>
  );
}

export default Product1;
