import React, { useState } from "react";
import "./Contact.css";
import { db } from "./firebase";
import Navbar from "./Navbar";

function Contact() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
  };

  return (
    <div id="contact" className="contact-wrapper">
      <Navbar />
      <div className="contact">
        <h1>CONTACT US</h1>
        <div className="contact-name">
          <div className="contact-nameFirst">
            <h5>First Name</h5>
            <input
              placeholder="First Name"
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div className="contact-nameLast">
            <h5>Last Name</h5>
            <input
              placeholder="Last Name"
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
        </div>
        <br />
        <h5>Email</h5>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <h5>Message</h5>
        <textarea
          placeholder="Message"
          rows="5"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit" onClick={sendToDatabase}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
