import React from "react";
import { useStateValue } from "./StateProvider";
import Currency from "./Currency";
import "./Subtotal.css";

function Subtotal() {
  const [{ cart }] = useStateValue();

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

  const getCartTotal = (a) =>
    a?.reduce((amount, item) => item.priceIndia + amount, 0);

  return (
    <div className="subtotal">
      <Currency value={getCartTotal(cart)} />
    </div>
  );
}

export default Subtotal;
