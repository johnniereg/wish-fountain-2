import * as React from "react"

import "../styles/components/hero.scss"

import Title from "../images/title.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="image__wrapper">
        <img alt="Wish Fountain" className="hero__image" src={Title}></img>
      </div>
    </div>
  )
}

export default Hero
