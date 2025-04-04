import * as React from "react"
import { useState } from "react"

import "../styles/components/info.scss"

import icon from "../images/question-mark.png"

const Info = () => {
  const [panelVisible, setPanelVisible] = useState(false)

  const toggleVisibility = val => {
    setPanelVisible(val)
  }

  return (
    <div className={`info ${panelVisible ? "info--open" : "info--close"}`}>
      <div className={`info__icon ${panelVisible ? "hidden" : "visible"}`}>
        <button
          onClick={() => {
            toggleVisibility(true)
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            alt="Question Mark icon to open info panel"
            className="icon icon--info"
            draggable={false}
            src={icon}
          ></img>
        </button>
      </div>
      <div className={`info__panel ${panelVisible ? "visible" : "hidden"}`}>
        <div className="info__controls">
          <button
            onClick={() => {
              toggleVisibility(false)
            }}
          >
            <span>X</span>
          </button>
        </div>
        <div className={`info__wrapper `}>
          <h1 className="info__title">Wish Fountain</h1>
          <div className="info__description">
            <p>
              1. With your cursor, pick up an object, and drop it into the
              fountain.
            </p>
            <p>
              2. When prompted, submit a wish: a playful, practical, serious,
              radical, silly or imaginative desire beyond your current
              experience. Don't overthink it, or do. It's your wish.
            </p>
            <p>
              3. Submit your wish. As an act of reciprocal exchange, someone
              else's wish will be shared with you in return.
            </p>
            <p>4. Check our Wish Gallery over the next few days, an Art City participant *may* grant your wish via artmaking! Images will be uploaded from April 10-13th.</p>
            <p>*not every wish is guaranteed fulfillment via art <nobr>:(</nobr></p>
            <hr></hr>
            <p>
              Wish Fountain Art City Edition website was made collaboratively by Art City participants in a workshop led by lead artist Hannah Doucet.
            </p>
            <hr></hr>
            <p>
              Art City is a not-for-profit community art studio dedicated to providing people of all ages with innovative and professional art programming, free of charge. Art City’s primary goal is to provide space and tools for anyone who wishes to express themselves creatively.

              Art City is located on Treaty 1 territory and the land on which we gather is the traditional territory of Anishinaabeg, Cree, Anisininew, Dakota, and Dene Peoples, and on the homeland of the Métis Nation
            </p>
            <hr></hr>
            <p>
              Hannah Doucet is a visual artist and arts educator from Winnipeg, based in Toronto, Canada. She works within photography, video and sculpture to explore fantasy, illness, and the body. She has exhibited at venues including Gallery 44, National Gallery of Canada, PLATFORM, Arsenal Contemporary Art and The New Gallery. Doucet won the inaugural PLATFORM Photography Award and was a recipient of the National Gallery of Canada's New Generation Photography award in 2023. She is one of four founders of Blinkers, a gallery in Winnipeg, where she was a co-director until August 2021. Doucet attended Skowhegan School of Painting and Sculpture in Summer 2024.
            </p>
            <hr></hr>
            <p>Code by Johnnie Regalado and Max Hur</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
