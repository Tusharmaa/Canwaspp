import React from "react";
import CanvasInfoFeatured from "../CanvasInfoFeatured";

function FProduct4() {
  return (
    <div className="FProduct4">
      <CanvasInfoFeatured
        id={4}
        name="ORANGE SUN"
        image="https://images.unsplash.com/photo-1595461701986-7ddd33b84392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1063&q=80"
        priceNotIndia={174.99}
        priceIndia={650}
      />
    </div>
  );
}

export default FProduct4;
