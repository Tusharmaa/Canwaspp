import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselFeature.css";

function CarouselFeature({ image, hide = false }) {
  return (
    <div className="carouselFeature">
      {!hide ? (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 myImage"
              src={image}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 myImage"
              src={image}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 myImage"
              src={image}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      ) : (
        <Carousel className="carousel-hide">
          <Carousel.Item>
            <img
              className="d-block w-100 myImage"
              src={image}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 myImage"
              src={image}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 myImage"
              src={image}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
}

export default CarouselFeature;
