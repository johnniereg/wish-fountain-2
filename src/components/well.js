import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { DropTarget } from "react-drag-drop-container"

const Well = ({ name, isDragging }) => {
  const opacity = isDragging ? 0.5 : 1
  return (
    <DropTarget targetKey="well">
      <div style={{ opacity: opacity }}>
        <StaticImage
          alt={"Wishing Well"}
          height={600}
          loading={"eager"}
          src="../images/fountain.png"
        />
      </div>
    </DropTarget>
  )
}

export default Well
