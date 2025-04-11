import * as React from "react"

import "../styles/components/hero.scss"

import Title from "../images/title.png"
import TitleMobile from "../images/title-mobile.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="image__wrapper">
        <img alt="Wish Fountain" className="hero__image hero__image--desktop" src={Title}></img>
        <img alt="Wish Fountain" className="hero__image hero__image--mobile" src={TitleMobile}></img>

      </div>
    </div>
  )
}

export default Hero
