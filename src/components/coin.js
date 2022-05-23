import * as React from "react"
import { DragDropContainer } from "react-drag-drop-container"

import "../styles/components/coin.scss"

import coin from "../images/coin.png"

const Coin = ({ name, toggleForm, isDragging }) => {
  const onDrop = () => {
    console.log("drop")
    toggleForm(true)
  }
  const onDrag = () => {
    console.log("dragging")
    isDragging(true)
  }
  const onDragEnd = () => {
    console.log("drag end")
    isDragging(false)
  }
  return (
    <DragDropContainer
      onDrop={onDrop}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      targetKey="well"
    >
      <img
        alt={"Coin"}
        style={{ cursor: "move", maxHeight: "50px", width: "auto" }}
        src={coin}
        draggable={false}
      ></img>
    </DragDropContainer>
  )
}

export default Coin
