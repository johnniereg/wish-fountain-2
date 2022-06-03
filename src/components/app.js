import * as React from "react"
import { useState } from "react"

import "../styles/components/app.scss"

import Well from "../components/well"
import Coin from "../components/coin"
import Form from "../components/form"
import Wishes from "../components/wishes"
import Info from "../components/info"
import Disclaimer from "../components/disclaimer"

import gem1 from "../images/gem-1.png"
import gem2 from "../images/gem-2.png"
import gem3 from "../images/gem-3.png"
import gem4 from "../images/gem-4.png"
import gem5 from "../images/gem-5.png"
import gem6 from "../images/gem-6.png"
import gem7 from "../images/gem-7.png"
import gem8 from "../images/gem-8.png"
import gem9 from "../images/gem-9.png"
import gem10 from "../images/gem-10.png"
import gem11 from "../images/gem-11.png"
import gem12 from "../images/gem-12.png"
import star1 from "../images/star-1.png"
import star2 from "../images/star-2.png"
import star3 from "../images/star-3.png"
import star4 from "../images/star-4.png"
import star5 from "../images/star-5.png"

const App = () => {
  const [formVisibility, setFormVisibility] = useState(false)
  const [wishVisibility, setWishVisibility] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const coins = [
    { img: gem1, name: "Gem 1", x: "8%", y: "55%" },
    { img: gem2, name: "Gem 2", x: "12%", y: "62%" },
    { img: gem3, name: "Gem 3", x: "17%", y: "77%" },
    { img: gem4, name: "Gem 4", x: "92%", y: "81%" },
    { img: gem5, name: "Gem 5", x: "88%", y: "71%" },
    { img: gem6, name: "Gem 6", x: "77%", y: "58%" },
    { img: gem7, name: "Gem 7", x: "78%", y: "86%" },
    { img: gem8, name: "Gem 8", x: "24%", y: "77%" },
    { img: gem9, name: "Gem 9", x: "24%", y: "71%" },
    { img: gem10, name: "Gem 10", x: "62%", y: "72%" },
    { img: gem11, name: "Gem 11", x: "77%", y: "81%" },
    { img: gem12, name: "Gem 12", x: "71%", y: "88%" },
    { img: star1, name: "Star 1", x: "11%", y: "81%" },
    { img: star2, name: "Star 2", x: "16%", y: "71%" },
    { img: star3, name: "Star 3", x: "74%", y: "70%" },
    { img: star4, name: "Star 4", x: "88%", y: "52%" },
    { img: star5, name: "Star 5", x: "20%", y: "80%" },
  ]

  return (
    <div className="app">
      <h1>Wish Fountain</h1>

      <Well isDragging={isDragging} />

      {coins.map(coin => {
        return (
          <Coin
            image={coin.img}
            isDragging={setIsDragging}
            name={coin.name}
            toggleForm={setFormVisibility}
            x={coin.x}
            y={coin.y}
          />
        )
      })}

      <Form
        toggleForm={setFormVisibility}
        toggleWish={() => {
          setWishVisibility(true)
        }}
        isVisible={formVisibility}
      />
      <Wishes isVisible={wishVisibility} toggleVisibility={setWishVisibility} />
      <Info />
      <Disclaimer />
    </div>
  )
}

export default App
