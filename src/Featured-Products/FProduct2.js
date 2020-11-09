import React from "react";
import CanvasInfoFeatured from "../CanvasInfoFeatured";

function FProduct2() {
  return (
    <div className="FProduct2">
      <CanvasInfoFeatured
        id={2}
        name="MIND BLOWING"
        image="https://images.unsplash.com/photo-1593532847202-e818146e134a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        priceNotIndia={134.99}
        priceIndia={800}
      />
    </div>
  );
}

export default FProduct2;
