import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 1%;
  width: 100%;
  height: 75px;
  border: none;
  box-shadow: 0px 3px 10px black;
  display: flex;
  z-index: 150000000000000000000;
  justify-content: space-between;

  .left {
    display: flex;
  }

  .logo {
    text-decoration: none;
    margin: auto 3px;
  }
  .logo > h2 {
    font-size: 32px;
    font-weight: 500;
    color: white;
    margin-right: 15px;
  }
  .location {
    color: gray;
    font-size: 15px;
    font-weight: 700;
    margin: auto;
  }
`;

function Navbar() {
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
    <Nav>
      <div className="left">
        <Link className="logo" to="/">
          <h2>Canvasp</h2>
        </Link>
        {/* <p className="location">{country}</p> */}
      </div>

      <Burger />
    </Nav>
  );
}

export default Navbar;
