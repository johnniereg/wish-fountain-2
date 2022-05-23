import * as React from "react"
import { useState } from "react"

import "../styles/components/info.scss"

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
        >
          Open Info Panel
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
