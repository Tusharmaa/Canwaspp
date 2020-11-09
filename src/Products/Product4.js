import React from "react";
import CanvasInfo from "../Product43D/CanvasInfo4";

function Product4() {
  return (
    <div className="product4">
      <CanvasInfo
        id={8}
        name="BATMAN"
        image={"/images/Batman.jpg"}
        priceIndia={900}
        // priceNotIndia={88.89}
      />
    </div>
  );
}

export default Product4;
