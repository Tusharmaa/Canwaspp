import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function CheckoutProduct({ id, name, image, priceIndia, priceNotIndia }) {
  // const [{}, dispatch] = useStateValue();
  const [dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE-FROM-CART",
      id: id,
    });
  };

  // let Token = "722043f5c7eccf";

  // const [country, setCountry] = useState("");

  // useEffect(() => {
  //   fetch(`https://ipinfo.io?token=${Token}`)
  //     // fetch("https://extreme-ip-lookup.com/json/")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log("Country is : ", response);
  //       setCountry(response.country);
  //     })
  //     .catch((e) => {
  //       console.log("Request failed:", e);
  //     });
  // }, []);

  return (
    <FlipMove>
      <div className="checkoutProduct">
        <div key="a" className="checkoutProduct-element">
          <img src={image} alt="checkoutProductImage" />
          <div className="checkout-elementNamePrice">
            <p>{name}</p>
            <p>₹{priceIndia}</p>
          </div>
          <hr />
        </div>
        <div className="checkoutProduct-elementDelete">
          <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
      </div>
    </FlipMove>
  );
}

export default CheckoutProduct;
