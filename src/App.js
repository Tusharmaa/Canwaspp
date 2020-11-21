import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import BuyCanvas from "./BuyCanvas";
import Checkout from "./Checkout";
import Login from "./Login";
import Contact from "./Contact";
import Motivational from "./Motivational";
import Cities from "./Cities";
import Card from "./Card";
import PaymentWrapper from "./PaymentWrapper";
import Orders from "./Orders";
import Marvel from "./Marvel";
import Dc from "./Dc";
import Splash from "./Splash";

import ReturnPolicy from "./Policies/ReturnPolicy";
import PrivacyPolicy from "./Policies/PrivacyPolicy";
import TermsCondition from "./Policies/TermsConditions";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CanvasInfo from "./Product13D/CanvasInfo";
import CanvasInfo2 from "./Product23D/CanvasInfo2";
import CanvasInfo3 from "./Product33D/CanvasInfo3";
import CanvasInfo4 from "./Product43D/CanvasInfo4";
import CanvasInfo5 from "./Product53D/CanvasInfo5";
import CanvasInfo6 from "./Product63D/CanvasInfo6";
import CanvasInfo7 from "./Product73D/CanvasInfo7";
import CanvasInfo8 from "./Product83D/CanvasInfo8";
import CanvasInfo9 from "./Product93D/CanvasInfo9";

import FProduct1 from "./Featured-Products/FProduct1";
import FProduct2 from "./Featured-Products/FProduct2";
import FProduct3 from "./Featured-Products/FProduct3";
import FProduct4 from "./Featured-Products/FProduct4";
import Product1 from "./Products/Product1";
import Product2 from "./Products/Product2";
import Product3 from "./Products/Product3";
import Product5 from "./Products/Product5";
import Product4 from "./Products/Product4";
import Product6 from "./Products/Product6";
import Product7 from "./Products/Product7";
import Product8 from "./Products/Product8";
import Product9 from "./Products/Product9";
import Navbar from "./Navbar";

const promise = loadStripe(
  "pk_test_51HPBdVFn9h2VqNbhHQzAow6BpBgd2bq4byDS02SOUowuXlYv3ajSggdOrvB2yCgJwwhRtvyScF5r7lB0Jr9Mr30O00FJTfJLwp"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  //A piece of code that runs on given condition.
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET-USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET-USER",
          user: null,
        });
      }
    });
    return () => {
      //any cleanup operations come here
      unSubscribe();
    };
  }, [dispatch]);

  console.log("I am user", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <AppWrapper />
          </Route>
          <Route path="/BuyCanvas">
            <BuyCanvas />
          </Route>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path="/Login">
            <Navbar />
            <Login />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/PrivacyPolicy">
            <PrivacyPolicy />
          </Route>
          <Route path="/ReturnPolicy">
            <ReturnPolicy />
          </Route>
          <Route path="/TermsCondition">
            <TermsCondition />
          </Route>

          <Route path="/Motivational">
            <Splash
              name="MOTIVATIONAL CANVASES"
              image={"/images/Gradient1.jpg"}
            />
            <Motivational />
          </Route>
          <Route path="/Cities">
            <Splash name="CITIES CANVASES" image={"/images/Gradient2.jpg"} />
            <Cities />
          </Route>
          <Route path="/Marvel">
            <Splash name="MARVEL CANVASES" image={"/images/Gradient3.jpg"} />
            <Marvel />
          </Route>
          <Route path="/Dc">
            <Splash name="DC CANVASES" image={"/images/Gradient4.jpg"} />
            <Dc />
          </Route>
          <Route path="/Payment">
            <PaymentWrapper />
          </Route>
          <Route path="/Card">
            <Elements stripe={promise}>
              <Card />
            </Elements>
          </Route>
          <Route path="/Orders">
            <Navbar />
            <Orders />
          </Route>

          <Route path="/CanvasInfo">
            <CanvasInfo />
          </Route>
          <Route path="/CanvasInfo2">
            <CanvasInfo2 />
          </Route>
          <Route path="/CanvasInfo3">
            <CanvasInfo3 />
          </Route>
          <Route path="/CanvasInfo4">
            <CanvasInfo4 />
          </Route>
          <Route path="/CanvasInfo5">
            <CanvasInfo5 />
          </Route>
          <Route path="/CanvasInfo6">
            <CanvasInfo6 />
          </Route>
          <Route path="/CanvasInfo7">
            <CanvasInfo7 />
          </Route>
          <Route path="/CanvasInfo8">
            <CanvasInfo8 />
          </Route>
          <Route path="/CanvasInfo9">
            <CanvasInfo9 />
          </Route>

          <Route path="/FProduct1">
            <FProduct1 />
          </Route>
          <Route path="/FProduct2">
            <FProduct2 />
          </Route>
          <Route path="/FProduct3">
            <FProduct3 />
          </Route>
          <Route path="/FProduct4">
            <FProduct4 />
          </Route>

          <Route path="/Product1">
            <Product1 />
          </Route>
          <Route path="/Product2">
            <Product2 />
          </Route>
          <Route path="/Product3">
            <Product3 />
          </Route>
          <Route path="/Product4">
            <Product4 />
          </Route>
          <Route path="/Product5">
            <Product5 />
          </Route>
          <Route path="/Product6">
            <Product6 />
          </Route>
          <Route path="/Product7">
            <Product7 />
          </Route>
          <Route path="/Product8">
            <Product8 />
          </Route>
          <Route path="/Product9">
            <Product9 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
