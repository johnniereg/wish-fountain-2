import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { useDrop } from "react-dnd"
import { ItemTypes } from "./ItemTypes.js"

const Well = ({ name }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.COIN,
    drop: () => ({ name: "Well" }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver
  let backgroundColor = "#222"
  if (isActive) {
    backgroundColor = "darkgreen"
  } else if (canDrop) {
    backgroundColor = "darkkhaki"
  }

  return (
    <div ref={drop} className="wishing-well">
      <StaticImage
        alt={"Wishing Well"}
        height={600}
        loading={"eager"}
        src="../images/fountain.png"
      />
    </div>
  )
}

export default Well
