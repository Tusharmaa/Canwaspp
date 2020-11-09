import React from "react";
import CanvasInfoFeatured from "../CanvasInfoFeatured";

function FProduct3() {
  return (
    <div className="FProduct3">
      <CanvasInfoFeatured
        id={3}
        name="ELECTRIC SHOCK "
        image="https://images.unsplash.com/photo-1593708943966-7624a0fa871d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        priceNotIndia={75.49}
        priceIndia={1100}
      />
    </div>
  );
}

export default FProduct3;
