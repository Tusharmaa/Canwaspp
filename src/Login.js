import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const history = useHistory();

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in
        setUser(authUser);
      } else {
        //use has logged out
        setUser(null);
      }
    });
    return () => {
      //perform some cleanup actions before you refire this effect
      unSubscribe();
    };
  }, [user, username]);

  console.log(username);

  const login = (e) => {
    dispatch({
      type: "SET-USERNAME",
      name: {
        username: username,
      },
    });
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    db.collection("Users").add({
      email: email,
      password: password,
      username: username,
    });
    setEmail("");
    setPassword("");
    setUser("");

    dispatch({
      type: "SET-USERNAME",
      name: {
        username: username,
      },
    });
    console.log("USERNAMEEEEE", username);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const registerWithGoogle = (e) => {
    e.preventDefault();
    var provider = new auth.GoogleAuthProvider();
    auth().signInWithRedirect(provider);
  };

  return (
    <div className="login">
      <Link to="/">
        <h1>CANVASP</h1>
      </Link>

      <div className="login-container">
        <h2>Sign In</h2>
        <form>
          <h5>Username</h5>
          <input
            required
            className="login-containerUsername"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5>Email</h5>
          <input
            className="login-containerEmail"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <h5>Password</h5>
          <input
            className="login-containerPassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className="login-containerSignIn"
            type="submit"
            onClick={login}
          >
            Sign In
          </button>
        </form>
        {/* <br /> */}
        <p>or</p>
        {/* <br /> */}
        <div className="login-conatinerCreateGoogle">
          <button
            className="login-containerRegister"
            type="submit"
            onClick={register}
          >
            Register your account
          </button>
          <button
            className="login-containerGoogle"
            type="submit"
            onClick={registerWithGoogle}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
