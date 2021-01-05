import React, { useState, useEffect } from "react";
import "./Contact.css";
import { db } from "./firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

function Contact() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const sendToDatabase = (e) => {
    e.preventDefault();
    db.collection("Contact").add({
      FirstName: fName,
      LastName: lName,
      Email: email,
      Message: message,
    });
    setFName("");
    setLName("");
    setEmail("");
    setMessage("");
    alert("Your inquiry has been recorded. We will get back to you soon.");
    history.push("/");
  };

  return (
    <div id="contact" className="contact-wrapper">
      <Navbar />
      <div className="contact">
        <h1>HOW CAN WE HELP?</h1>
        <p>
          If you want to place a custom order or have some doubts regarding our
          products,
        </p>
        <p> feel free to contact us or you can also DM us on our instagram.</p>

        <div className="contact-name">
          <div className="contact-nameFirst">
            <h5>FIRST NAME</h5>
            <input
              placeholder="First Name"
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div className="contact-nameLast">
            <h5>LAST NAME</h5>
            <input
              placeholder="Last Name"
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div className="contact-Email">
          <h5>EMAIL</h5>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="contact-Message">
          <h5>MESSAGE</h5>
          <textarea
            placeholder="Message"
            rows="5"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" onClick={sendToDatabase}>
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
