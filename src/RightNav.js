import React from "react";
import styled from "styled-components";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex: 0.6;
  justify-content: space-evenly;
  margin-top: 7px;
  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    color: gray;
    letter-spacing: 3px;
    margin: auto 12px;
    font-weight: 600;
    border-radius: 10px;
  }

  a > p {
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    color: gray;
    letter-spacing: 3px;
    margin: auto 12px;
    font-weight: 600;
  }

  a > div {
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    color: gray;
    letter-spacing: 3px;
    margin: auto 12px;
    border-radius: 10px;
  }
  a > div > p {
    text-decoration: none;
    font-size: 15px;
    font-weight: 400;
    color: gray;
    letter-spacing: 3px;
    margin: auto 12px;
    font-weight: 600;
  }

  a > div:hover {
    color: white;
  }
  a:hover {
    color: white;
  }
  a > p:hover {
    color: white;
  }

  @media screen and (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: black;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 75vh;
    width: 50vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
      font-size: 20px;
      font-weight: 500;
    }
  }

  .dropbtn {
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    color: gray;
    letter-spacing: 3px;
    margin: auto 12px;
    font-weight: 600;
    background-color: transparent;
    border: none;
    margin-left: 18px;
    margin-bottom: 15px
    border-radius: 10px;
    outline: none;
  }

  @media screen and (max-width: 650px) {
    .dropbtn {
      margin: 25px 17px;
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 10px;
    padding: 1%;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .dropdown-content a:hover {
    background-color: black;
    color: white;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: black;
    color: white;
  }
  .email > p {
    font-size: 10px;
    margin-left: -2px;
  }
`;

const RightNav = ({ open, hideTexts = false }) => {
  const [{ cart, user }, dispatch] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "EMPTY-CART",
      });
    }
  };

  return (
    <Ul open={open}>
      <div class="dropdown">
        <button class="dropbtn">SHOP</button>
        <div class="dropdown-content">
          <Link to="/Motivational">MOTIVATIONAL</Link>
          <Link to="/Cities">CITIES</Link>
          <Link to="/Marvel">MARVEL</Link>
          <Link to="/Dc">DC</Link>
        </div>
      </div>
      <Link to="/Orders">
        <p>YOUR ORDERS</p>
      </Link>
      <Link to={!user && "/Login"}>
        <div className="email" onClick={login}>
          {user ? "SIGN OUT" : "SIGN IN"} <p className="email">{user?.email}</p>
        </div>
      </Link>
      <Link to="/Checkout">
        <p>
          {" "}
          CART <ShoppingCartIcon />:{cart?.length}
        </p>
      </Link>
    </Ul>
  );
};

export default RightNav;

//  {/* <Link to={!user && "/Login"}>
//             <div className="navbar-textsEmail" onClick={login}>
//               {user ? "SIGN OUT" : "SIGN IN"}
//               <p className="email">{user?.email}</p>
//             </div>
//           </Link> */}
