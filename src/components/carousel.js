import * as React from "react";
import { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/components/carousel.scss";

// import icon from "../images/exclaymation-mark.png";
import icon from "../images/semi-colon.png";

const Carousel = ({ coins }) => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [randomStartIndex, setRandomStartIndex] = useState(0);

  console.log("randomStartIndex", randomStartIndex);

  const toggleVisibility = (val) => {
    if (val) {
      // When opening, generate a new random start slide
      setRandomStartIndex(Math.floor(Math.random() * coins.length));
    }
    setPanelVisible(val);
  };

  return (
    <div
      className={`carousel ${
        panelVisible ? "carousel--open" : "carousel--close"
      }`}
    >
      <div className={`carousel__icon ${panelVisible ? "hidden" : "visible"}`}>
        <button
          onClick={() => {
            toggleVisibility(true);
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {" "}
          <img
            alt="Carousel icon to open carousel panel"
            className="icon icon--carousel"
            draggable={false}
            src={icon}
          ></img>
        </button>
      </div>
      <div className={`carousel__panel ${panelVisible ? "visible" : "hidden"}`}>
        <div className="carousel__controls">
          <button
            onClick={() => {
              toggleVisibility(false);
            }}
          >
            <span>X</span>
          </button>
        </div>
        <CarouselProvider
          className="carousel__container"
          naturalSlideWidth={50}
          naturalSlideHeight={50}
          totalSlides={1}
          currentSlide={0}
          infinite
        >
          {/* <Slider className="carousel__wrapper_slider"> */}
          <Slider>
            {coins.map((coin, index) => (
              <Slide index={index} key={coin.name} classname="carousel__slide">
                <h1 className="carousel__title">{coin.name}</h1>
                <Image
                  className="carousel_image"
                  src={coin.img}
                  alt={`Coin ${coin.name}`}
                />
                <p>
                  this is an artwork by a child who is amazing. She/He/They will
                  be the greatest person in whatever they do in the future and
                  will bring world peace.
                </p>
              </Slide>
            ))}
          </Slider>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <ButtonBack
              style={{
                padding: "8px 12px",
                backgroundColor: "#007acc",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Back
            </ButtonBack>
            <ButtonNext
              style={{
                padding: "8px 12px",
                backgroundColor: "#007acc",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Next
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Carousel;
