import * as React from "react"
import { DropTarget } from "react-drag-drop-container"

import "../styles/components/well.scss"

import Fountain from "../images/fountain.gif"

const Well = ({ name, isDragging }) => {
  return (
    <DropTarget targetKey="well">
      <div className="well">
        <img
          alt="A yellow wishing well with water flowing from top to bottom"
          src={Fountain}
        />
      </div>
    </DropTarget>
  )
}

export default Well
