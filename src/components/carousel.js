import * as React from "react";
import { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

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
        <div className={`carousel__wrapper `}>
          <CarouselProvider
            className="caraousel__continer"
            naturalSlideWidth={100}
            naturalSlideHeight={20}
            totalSlides={coins.length}
            currentSlide={randomStartIndex}
          >
            <Slider>
              {coins.map((coin, index) => (
                <Slide index={index} key={index}>
                  <div width="300px">
                    <h1 className="carousel__title">{coin.name}</h1>
                    <img
                      src={coin.img}
                      alt={`Artwork ${index + 1}`}
                      style={{ width: "100%" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "10px" }}>
                      {coin.name}
                    </p>
                  </div>
                </Slide>
              ))}
            </Slider>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
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
    </div>
  );
};

export default Carousel;
