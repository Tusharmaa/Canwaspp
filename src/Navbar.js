import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.97);
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

  .logo > img {
    top: 0;
    left: 0;
    height: 75px;
    width: 160px;
  }
  .logo > img:nth-child(2) {
    display: none;
  }

  .location {
    color: gray;
    font-size: 15px;
    font-weight: 700;
    margin: auto;
  }
  @media screen and (max-width: 650px) {
    .logo > img:nth-child(1) {
      display: none;
    }
    .logo > img:nth-child(2) {
      display: block;
    }
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
          <img src={"/images/Logo1.png"} alt="Logo" />
          <img src={"/images/Logo.png"} alt="Logo" />
        </Link>
        {/* <p className="location">{country}</p> */}
      </div>
      <Burger />
    </Nav>
  );
}

export default Navbar;
