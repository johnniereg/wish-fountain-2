import * as React from "react"
import { DragDropContainer } from "react-drag-drop-container"

import "../styles/components/coin.scss"

const Coin = ({ image, isDragging, name, toggleForm, x, y }) => {
  const onDrop = () => {
    toggleForm(true)
  }
  const onDrag = () => {
    isDragging(true)
  }
  const onDragEnd = () => {
    isDragging(false)
  }
  return (
    <div
      class="coin"
      style={{
        left: x,
        top: y,
      }}
    >
      <DragDropContainer
        onDrop={onDrop}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        targetKey="well"
      >
        <img
          alt={name}
          className="icon"
          style={{ cursor: "move", maxHeight: "75px", width: "auto" }}
          src={image}
          draggable={false}
        ></img>
      </DragDropContainer>
    </div>
  )
}

export default Coin
