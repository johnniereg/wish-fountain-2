import * as React from "react";
import { useState } from "react";

import "../styles/components/app.scss";

import Hero from "../components/hero";
import Well from "../components/well";
import Coin from "../components/coin";
import Form from "../components/form";
import Wishes from "../components/wishes";
import Info from "../components/info";
import Carousel from "../components/carousel";
import Disclaimer from "../components/disclaimer";

import gem1 from "../images/gem-1.png";
import gem2 from "../images/gem-2.png";
import gem3 from "../images/gem-3.png";
import gem4 from "../images/gem-4.png";
import gem5 from "../images/gem-5.png";
import gem6 from "../images/gem-6.png";
import gem7 from "../images/gem-7.png";
import gem8 from "../images/gem-8.png";
import gem9 from "../images/gem-9.png";
import gem10 from "../images/gem-10.png";
import gem11 from "../images/gem-11.png";
import gem12 from "../images/gem-12.png";

import gem13 from "../images/gem-13.png";
import gem14 from "../images/gem-14.png";
import gem15 from "../images/gem-15.png";
import gem16 from "../images/gem-16.png";
import gem17 from "../images/gem-17.png";
import gem18 from "../images/gem-18.png";
import gem19 from "../images/gem-19.png";

import star1 from "../images/star-1.png";
import star2 from "../images/star-2.png";
import star3 from "../images/star-3.png";
import star4 from "../images/star-4.png";
import star5 from "../images/star-5.png";

import star6 from "../images/star-6.png";
import star7 from "../images/star-7.png";
import star8 from "../images/star-8.png";
import star9 from "../images/star-9.png";

const App = () => {
  const [formVisibility, setFormVisibility] = useState(false);
  const [wishVisibility, setWishVisibility] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const coins = [
    { img: gem1, name: "Gem-1" },
    { img: gem2, name: "Gem-2" },
    { img: gem3, name: "Gem-3" },
    { img: gem4, name: "Gem-4" },
    { img: gem5, name: "Gem-5" },
    { img: gem6, name: "Gem-6" },
    { img: gem7, name: "Gem-7" },
    { img: gem8, name: "Gem-8" },
    { img: gem9, name: "Gem-9" },
    { img: gem10, name: "Gem-10" },
    { img: gem11, name: "Gem-11" },
    { img: gem12, name: "Gem-12" },
    { img: gem13, name: "Gem-13" },
    { img: gem14, name: "Gem-14" },
    { img: gem15, name: "Gem-15" },
    { img: gem16, name: "Gem-16" },
    { img: gem17, name: "Gem-17" },
    { img: gem18, name: "Gem-18" },
    { img: gem19, name: "Gem-19" },
    { img: gem5, name: "Gem-20" },
    { img: gem6, name: "Gem-21" },
    { img: gem14, name: "Gem-22" },
    { img: gem14, name: "Gem-23" },
    { img: gem6, name: "Gem-24" },
    { img: gem14, name: "Gem-25" },
    { img: star1, name: "Star-1" },
    { img: star2, name: "Star-2" },
    { img: star3, name: "Star-3" },
    { img: star4, name: "Star-4" },
    { img: star5, name: "Star-5" },
    { img: star6, name: "Star-6" },
    { img: star7, name: "Star-7" },
    { img: star8, name: "Star-8" },
    { img: star9, name: "Star-9" },
  ];

  const art = [
    { img: gem1, name: "Gem-1" },
    { img: gem2, name: "Gem-2" },
    { img: gem3, name: "Gem-3" },
    { img: gem4, name: "Gem-4" },
    { img: gem5, name: "Gem-5" },
    { img: gem6, name: "Gem-6" },
    { img: gem7, name: "Gem-7" },
    { img: gem8, name: "Gem-8" },
    { img: gem9, name: "Gem-9" }
  ]
  return (
    <div className="app">
      <div className="app__wrapper">
        <Hero />
        <Well isDragging={isDragging} />
      </div>

      <div className="coins">
        {coins.map((coin) => {
          return (
            <Coin
              image={coin.img}
              isDragging={setIsDragging}
              key={coin.name}
              name={coin.name}
              toggleForm={setFormVisibility}
              x={coin.x}
              y={coin.y}
            />
          );
        })}
      </div>

      <Form
        toggleForm={setFormVisibility}
        toggleWish={() => {
          setWishVisibility(true);
        }}
        isVisible={formVisibility}
      />
      <Wishes isVisible={wishVisibility} toggleVisibility={setWishVisibility} />
      <Info />
      <Disclaimer />
      <Carousel art={art} />
    </div>
  );
};

export default App;
