import React, {useEffect} from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Checkout() {
  const [{ cart }] = useStateValue();
  
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="checkoutWrapper">
      <div className="checkout">
        <Navbar />
        {cart?.length === 0 ? (
          <div className="checkout-text">
            <Subtotal />
            <br />
            <h1>Your cart is empty</h1>
            <p>
              Currently, you have no items in your cart. To buy items, click
              "Add to cart" in the products section.
            </p>
          </div>
        ) : (
          <div className="checkout-text">
            <Subtotal />
            <br />
            <h1>Your cart products.</h1>
            <br />
            {cart.map((item) => (
              <CheckoutProduct
                priceIndia={item.priceIndia}
                priceNotIndia={item.priceNotIndia}
                id={item.id}
                name={item.name}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
