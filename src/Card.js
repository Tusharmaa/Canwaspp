import React, {useEffect} from "react";
import "./Card.css";
import CardOutlineIndia from "./CardOutlineIndia";
import { useStateValue } from "./StateProvider";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
// import CardOutlineNotIndia from "./CardOutlineNotIndia";

function Card() {
  // let Token = "722043f5c7eccf";
  // const [country, setCountry] = useState("");
  const [{ details }] = useStateValue();
  const history = useHistory();
  
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

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
    <div className="card">
      <div className="card-top">
        <div className="card-button">
          <ArrowBackIosIcon
            onClick={() => history.goBack()}
            className="card-backbutton"
          />
        </div>
        <p>PAYMENT (2 of 2)</p>
      </div>
      <hr />
      {details === undefined ||
      details?.fName === "" ||
      details?.lName === "" ||
      details?.email === "" ||
      details?.apt === "" ||
      details?.street === "" ||
      details?.number === "" ||
      details?.city === "" ||
      details?.state === "" ||
      details?.pincode === "" ? (
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>
          Please enter all your details in the payment page
        </h3>
      ) : (
        <CardOutlineIndia
          name={details?.fName}
          surname={details?.lName}
          email={details?.email}
          number={details?.number}
          apt={details?.apt}
          street={details?.street}
          city={details?.city}
          state={details?.state}
          pincode={details?.pincode}
        />
      )}
    </div>
  );
}

export default Card;

// (
//   <CardOutlineNotIndia
//     name={details?.fName}
//     surname={details?.lName}
//     email={details?.email}
//     number={details?.number}
//     apt={details?.apt}
//     street={details?.street}
//     city={details?.city}
//     state={details?.state}
//     pincode={details?.pincode}
//   />
// )
