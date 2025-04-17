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

import coin1 from "../images/coin1.png";
import coin2 from "../images/coin2.png";
import coin3 from "../images/coin3.png";
import coin4 from "../images/coin4.png";
import coin5 from "../images/coin5.png";
import coin6 from "../images/coin6.png";
import coin7 from "../images/coin7.png";
import coin8 from "../images/coin8.png";
import coin9 from "../images/coin9.png";
import coin10 from "../images/coin10.png";
import coin11 from "../images/coin11.png";
import coin12 from "../images/coin12.png";
import coin13 from "../images/coin13.png";
import coin14 from "../images/coin14.png";
import coin15 from "../images/coin15.png";
import coin16 from "../images/coin16.png";
import coin17 from "../images/coin17.png";
import coin18 from "../images/coin18.png";
import coin19 from "../images/coin19.png";
import coin20 from "../images/coin20.png";
import coin21 from "../images/coin21.png";
import coin22 from "../images/coin22.png";
import coin23 from "../images/coin23.png";
import coin24 from "../images/coin24.png";
import coin25 from "../images/coin25.png";
import coin26 from "../images/coin26.png";
import coin27 from "../images/coin27.png";
import coin28 from "../images/coin28.png";
import coin29 from "../images/coin29.png";
import coin30 from "../images/coin30.png";
import coin31 from "../images/coin31.png";
import coin32 from "../images/coin32.png";
import coin33 from "../images/coin33.png";
import coin34 from "../images/coin34.png";
import coin35 from "../images/coin35.png";
import coin36 from "../images/coin36.png";

import art1 from "../images/01wishgranted.png"
import art2 from "../images/02wishgranted.png"
import art3 from "../images/03wishgranted.png"
import art4 from "../images/04wishgranted.png"
import art5 from "../images/05wishgranted.png"
import art6 from "../images/06wishgranted.png"
import art7 from "../images/07wishgranted.png"
import art8 from "../images/08wishgranted.png"
import art9 from "../images/09wishgranted.png"
import art10 from "../images/10wishgranted.png"
import art11 from "../images/11wishgranted.png"
import art12 from "../images/12wishgranted.png"
import art13 from "../images/13wishgranted.png"
import art14 from "../images/14wishgranted.png"
import art15 from "../images/15wishgranted.png"
import art16 from "../images/16wishgranted.png"
import art17 from "../images/17wishgranted.png"
import art18 from "../images/18wishgranted.png"
import art19 from "../images/19wishgranted.png"
import art20 from "../images/20wishgranted.png"
import art21 from "../images/21wishgranted.png"
import art22 from "../images/22wishgranted.png"
import art23 from "../images/23wishgranted.png"
import art24 from "../images/24wishgranted.png"
import art25 from "../images/25wishgranted.png"
import art26 from "../images/26wishgranted.png"
import art27 from "../images/27wishgranted.png"
import art28 from "../images/28wishgranted.png"
import art29 from "../images/29wishgranted.png"
import art30 from "../images/30wishgranted.png"
import art31 from "../images/31wishgranted.png"
import art32 from "../images/32wishgranted.png"
import art33 from "../images/33wishgranted.png"
import art34 from "../images/34wishgranted.png"
import art35 from "../images/35wishgranted.png"
import art36 from "../images/36wishgranted.png"
import art37 from "../images/37wishgranted.png"
import art38 from "../images/38wishgranted.png"
import art39 from "../images/39wishgranted.png"
import art40 from "../images/40wishgranted.png"
import art41 from "../images/41wishgranted.png"
import art42 from "../images/42wishgranted.png"
import art43 from "../images/43wishgranted.png"
import art44 from "../images/44wishgranted.png"
import art45 from "../images/45wishgranted.png"
import art46 from "../images/46wishgranted.png"
import art47 from "../images/47wishgranted.png"
import art48 from "../images/48wishgranted.png"
import art49 from "../images/49wishgranted.png"
import art50 from "../images/50wishgranted.png"
import art51 from "../images/51wishgranted.png"
import art52 from "../images/52wishgranted.png"
import art53 from "../images/53wishgranted.png"
import art54 from "../images/54wishgranted.png"
import art55 from "../images/55wishgranted.png"
import art56 from "../images/56wishgranted.png"

const App = () => {
  const [formVisibility, setFormVisibility] = useState(false);
  const [wishVisibility, setWishVisibility] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const coins = [
    { img: coin1, name: "Gem-1" },
    { img: coin2, name: "Gem-2" },
    { img: coin3, name: "Gem-3" },
    { img: coin4, name: "Gem-4" },
    { img: coin5, name: "Gem-5" }, 
    { img: coin6, name: "Gem-6" },
    { img: coin7, name: "Gem-7" },
    { img: coin8, name: "Gem-8" },
    { img: coin9, name: "Gem-9" },
    { img: coin10, name: "Gem-10" },
    { img: coin11, name: "Gem-11" },
    { img: coin12, name: "Gem-12" },
    { img: coin13, name: "Gem-13" },
    { img: coin14, name: "Gem-14" },
    { img: coin15, name: "Gem-15" },
    { img: coin16, name: "Gem-16" },
    { img: coin17, name: "Gem-17" },
    { img: coin18, name: "Gem-18" },
    { img: coin19, name: "Gem-19" },
    { img: coin20, name: "Gem-20" },
    { img: coin21, name: "Gem-21" },
    { img: coin22, name: "Gem-22" },
    { img: coin23, name: "Gem-23" },
    { img: coin24, name: "Gem-24" },
    { img: coin25, name: "Gem-25" },
    { img: coin26, name: "Star-1" },
    { img: coin27, name: "Star-2" },
    { img: coin28, name: "Star-3" },
    { img: coin29, name: "Star-4" },
    { img: coin30, name: "Star-5" },
    { img: coin31, name: "Star-6" },
    { img: coin32, name: "Star-7" },
    { img: coin33, name: "Star-8" },
    { img: coin34, name: "Star-9" },
    { img: coin35, name: "Star-10" },
    { img: coin36, name: "Star-11" },
  ];

  const art = [
    { img: art1, name: "Wish Granted 1" },
    { img: art2, name: "Wish Granted 2" },
    { img: art3, name: "Wish Granted 3" },
    { img: art4, name: "Wish Granted 4" },
    { img: art5, name: "Wish Granted 5" },
    { img: art6, name: "Wish Granted 6" },
    { img: art7, name: "Wish Granted 7" },
    { img: art8, name: "Wish Granted 8" },
    { img: art9, name: "Wish Granted 9" },
    { img: art10, name: "Wish Granted 10" },
    { img: art11, name: "Wish Granted 11" },
    { img: art12, name: "Wish Granted 12" },
    { img: art13, name: "Wish Granted 13" },
    { img: art14, name: "Wish Granted 14" },
    { img: art15, name: "Wish Granted 15" },
    { img: art16, name: "Wish Granted 16" },
    { img: art17, name: "Wish Granted 17" },
    { img: art18, name: "Wish Granted 18" },
    { img: art19, name: "Wish Granted 19" },
    { img: art20, name: "Wish Granted 20" },
    { img: art21, name: "Wish Granted 21" },
    { img: art22, name: "Wish Granted 22" },
    { img: art23, name: "Wish Granted 23" },
    { img: art24, name: "Wish Granted 24" },
    { img: art25, name: "Wish Granted 25" },
    { img: art26, name: "Wish Granted 26" },
    { img: art27, name: "Wish Granted 27" },
    { img: art28, name: "Wish Granted 28" },
    { img: art29, name: "Wish Granted 29" },
    { img: art30, name: "Wish Granted 30" },
    { img: art31, name: "Wish Granted 31" },
    { img: art32, name: "Wish Granted 32" },
    { img: art33, name: "Wish Granted 33" },
    { img: art34, name: "Wish Granted 34" },
    { img: art35, name: "Wish Granted 35" },
    { img: art36, name: "Wish Granted 36" },
    { img: art37, name: "Wish Granted 37" },
    { img: art38, name: "Wish Granted 38" },
    { img: art39, name: "Wish Granted 39" },
    { img: art40, name: "Wish Granted 40" },
    { img: art41, name: "Wish Granted 41" },
    { img: art42, name: "Wish Granted 42" },
    { img: art43, name: "Wish Granted 43" },
    { img: art44, name: "Wish Granted 44" },
    { img: art45, name: "Wish Granted 45" },
    { img: art46, name: "Wish Granted 46" },
    { img: art47, name: "Wish Granted 47" },
    { img: art48, name: "Wish Granted 48" },
    { img: art49, name: "Wish Granted 49" },
    { img: art50, name: "Wish Granted 50" },
    { img: art51, name: "Wish Granted 51" },
    { img: art52, name: "Wish Granted 52" },
    { img: art53, name: "Wish Granted 53" },
    { img: art54, name: "Wish Granted 54" },
    { img: art55, name: "Wish Granted 55" },
    { img: art56, name: "Wish Granted 56" }
  // Add more art images as needed
  ];

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
