import * as React from "react";
import { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image
} from "pure-react-carousel";

import "../styles/components/carousel.scss";
import "pure-react-carousel/dist/react-carousel.es.css";

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
            className="carousel__continer"
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            totalSlides={coins.length}
            currentSlide={randomStartIndex}
          >
            <Slider>
              {coins.map((coin, index) => (
                <Slide index={index} key={coin.name}>
                  <div className="carousel__slider-box">
                    <div>
                      <h1 className="carousel__title">{coin.name}</h1>
                    </div>
                    <div className="carousel__image">
                      <Image
                        src={coin.img}
                        alt={`Coin ${coin.name}`}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div>
                      <h1>I can do that</h1>
                      <p>
                        Now that we know who you are, I know who I am. I'm not a
                        mistake! It all makes sense! In a comic, you know how
                        you can tell who the arch-villain's going to be? He's
                        the exact opposite of the hero. And most times they're
                        friends, like you and me! I should've known way back
                        when... You know why, David? Because of the kids. They
                        called me Mr Glass.{" "}
                      </p>
                      <br />
                      <h1>We happy?</h1>
                      <p>
                        Now that there is the Tec-9, a crappy spray gun from
                        South Miami. This gun is advertised as the most popular
                        gun in American crime. Do you believe that shit? It
                        actually says that in the little book that comes with
                        it: the most popular gun in American crime. Like they're
                        actually proud of that shit.{" "}
                      </p>
                    </div>
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
