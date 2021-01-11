import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div id="about">
      <h1>ABOUT US</h1>

      <div
        className="about-containerBlue"
        data-aos="fade-right"
        data-aos-duration="2000"
      ></div>
      <div
        className="about-containerText"
        data-aos="zoom-out-up"
        data-aos-duration="2000"
      >
        <p>Canwasp is a graphic design company based in India.</p>
        <br></br>
        <p>
          We, at Canwasp, provide our users with high quality, crisp and rich in
          colours custom canvas.
        </p>
      </div>
      <img
        className="about-containerImageImg"
        data-aos="fade-left"
        data-aos-duration="3000"
        src={"/images/art.jpeg"}
        // src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        alt="img"
      />
    </div>
  );
}

export default About;
