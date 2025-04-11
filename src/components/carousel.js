import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";

import "../styles/components/carousel.scss";
import "pure-react-carousel/dist/react-carousel.es.css";

import icon from "../images/semi-colon.png";
import left from "../images/to-left.png";
import right from "../images/to-right.png";
import close from "../images/close.png";

const Carousel = ({ art }) => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [randomStartIndex, setRandomStartIndex] = useState(0);
  const panelRef = useRef(null); // Reference to the panel element
  const [fullscreenImage, setFullscreenImage] = useState(null); // State to track the fullscreen image

  const toggleVisibility = (val) => {
    if (val) {
      // When opening, generate a new random start slide
      setRandomStartIndex(Math.floor(Math.random() * art.length));
    }
    setPanelVisible(val);
  };

  const openFullscreen = (imgSrc) => {
    setFullscreenImage(imgSrc); // Set the clicked image as fullscreen
  };

  const closeFullscreen = () => {
    setFullscreenImage(null); // Close the fullscreen mode
  };

  // Close the panel if a click occurs outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ignore clicks on the fullscreen overlay
      if (fullscreenImage) {
        return;
      }

      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setPanelVisible(false);
      }
    };

    if (panelVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [panelVisible, fullscreenImage]); // Add fullscreenImage as a dependency

  return (
    <>
      <div
        className={`gallery ${
          panelVisible ? "gallery--open" : "gallery--close"
        }`}
      >
        <div className={`gallery__icon ${panelVisible ? "hidden" : "visible"}`}>
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
            <img
              alt="Carousel icon to open carousel panel"
              className="icon icon--carousel"
              draggable={false}
              src={icon}
            ></img>
          </button>
        </div>
        <div
          className={`gallery__panel ${panelVisible ? "visible" : "hidden"}`}
          ref={panelRef} // Attach the ref to the panel
        >
          <div className="gallery__controls">
            <button
              onClick={() => {
                toggleVisibility(false);
              }}
            >
              <span>
                <div>
                  <img
                    src={close}
                    alt={`Art ${art.name}`}
                    //style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </span>
            </button>
          </div>
          <div className={`gallery__wrapper`}>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              totalSlides={art.length}
              currentSlide={randomStartIndex}
              loop={true}
              infinite={true}
            >
              <Slider>
                {art.map((art, index) => (
                  <Slide index={index} key={art.name}>
                    <div className="carousel__slider-box">
                      <div
                        className="carousel__image"
                        onClick={() => openFullscreen(art.img)}
                      >
                        <Image
                          src={art.img}
                          alt={`Art ${art.name}`}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="carousel__text">
                        <h1>{art.name}</h1>
                        <p>
                          {art.description
                            ? art.description
                            : "No description available."}
                        </p>
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>
              <div className="carousel__arrow_container">
                <ButtonBack className="carousel__arrow_btn">
                  <Image
                    className="carousel__arrow_img"
                    src={left}
                    alt={`left Arrow`}
                  ></Image>
                </ButtonBack>

                <ButtonNext className="carousel__arrow_btn">
                  <Image
                    className="carousel__arrow_img"
                    src={right}
                    alt={`right Arrow`}
                  ></Image>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
      {fullscreenImage && (
        <div
          className="fullscreen-overlay"
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click event from propagating
            closeFullscreen();
          }}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen Art"
            className="fullscreen-image"
          />
        </div>
      )}
    </>
  );
};

export default Carousel;
