import * as React from "react"
import { DropTarget } from "react-drag-drop-container"

import "../styles/components/well.scss"

import Fountain from "../images/fountain.gif"

const Well = ({ name, isDragging }) => {
  return (
    <div className="well">
      <DropTarget className="well" targetKey="well">
        <div className="img__wrapper">
          <img
            alt="A yellow wishing well with water flowing from top to bottom"
            loading="eager"
            src={Fountain}
          />
        </div>
      </DropTarget>
    </div>
  )
}

export default Well
