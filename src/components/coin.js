import * as React from "react"
import { useState, setState } from "react"
import { DragDropContainer } from "react-drag-drop-container"

import "../styles/components/coin.scss"
import Chime from "../images/chime.wav"

const Coin = ({ image, isDragging, name, toggleForm, x, y }) => {
  const [isVisible, setIsVisible] = useState(true)

  const playSound = () => {
    const audio = new Audio(Chime)
    audio.play()
  }

  const onDrop = () => {
    toggleForm(true)
    setIsVisible(false)
    playSound()
  }

  const onDrag = () => {
    isDragging(true)
  }

  const onDragEnd = () => {
    isDragging(false)
  }

  const display = isVisible ? "block" : "none"

  const coinClasses = `coin ${name}`

  return (
    <div
      class={coinClasses}
      style={{
        display: display,
      }}
    >
      <DragDropContainer
        onDrop={onDrop}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        targetKey="well"
      >
        <img alt={name} className="icon" src={image} draggable={false}></img>
      </DragDropContainer>
    </div>
  )
}

export default Coin
