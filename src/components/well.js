import * as React from "react"
import { DropTarget } from "react-drag-drop-container"

import "../styles/components/well.scss"

import Fountain from "../images/fountain.gif"

const Well = ({ name, isDragging }) => {
  return (
    <DropTarget targetKey="well">
      <div class="well">
        <img src={Fountain} />
      </div>
    </DropTarget>
  )
}

export default Well
