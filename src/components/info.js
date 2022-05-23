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
    <div className="info">
      <div className={`info__icon ${panelVisible ? "hidden" : ""}`}>
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
            className="icon"
            draggable={false}
            src={icon}
            style={{ marginBottom: 0, maxHeight: "75px" }}
          ></img>
        </button>
      </div>
      <div className={`info__wrapper ${panelVisible ? "" : "hidden"}`}>
        <h1 className="info__title">Info About this Piece</h1>
        <p className="info__description">
          Here is some information about this piece.
        </p>
        <button
          onClick={() => {
            toggleVisibility(false)
          }}
        >
          Close Info Panel
        </button>
      </div>
    </div>
  )
}

export default Info
