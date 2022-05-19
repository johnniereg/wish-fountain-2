import * as React from "react"
import { useDrag } from "react-dnd"
import { ItemTypes } from "./ItemTypes.js"

import coin from "../images/coin.png"

const Coin = ({ name, toggleForm }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.COIN,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        toggleForm(true)
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  if (isDragging) {
    return <div ref={drag} />
  }
  return (
    <div ref={drag} className="coin">
      <img
        alt={"Coin"}
        style={{ cursor: "move", maxHeight: "50px", width: "auto" }}
        src={coin}
        draggable={false}
      ></img>
    </div>
  )
}

export default Coin
