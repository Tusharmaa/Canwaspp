import React from "react";
import "./Product.css";
// import { useStateValue } from "./StateProvider";

function Product({ id, image, name, priceIndia }) {
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

  // console.log(country);

  return (
    <div className="product">
      <div className="product-element">
        <img src={image} alt="productImage" />
        <hr />
        <div className="product-elementNamePrice">
          <p>{name}</p>
          <p>
            <p>₹{priceIndia}</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
