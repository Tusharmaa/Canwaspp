import React from "react";
import CanvasInfoFeatured from "../CanvasInfoFeatured";

function FProduct1() {
  return (
    <div className="FProduct1">
      <CanvasInfoFeatured
        id={1}
        name="SOOTHING"
        image="https://images.unsplash.com/photo-1594656877277-e807ce76d9ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        priceNotIndia={99.99}
        priceIndia={550}
      />
    </div>
  );
}

export default FProduct1;
