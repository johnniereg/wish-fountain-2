import * as React from "react"

import "../styles/components/hero.scss"

import Title from "../images/title.gif"

const Hero = () => {
  return (
    <div className="hero">
      <div className="image__wrapper">
        <img alt="Wish Fountain" className="hero__image" src={Title}></img>
        <h1>Wish Fountain Art City</h1>
      </div>
    </div>
  )
}

export default Hero
