import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { DropTarget } from "react-drag-drop-container"
import FountainVideo from "../images/fountain-compressed.mp4"
import Fountain from "../images/fountain.gif"

const Well = ({ name, isDragging }) => {
  return (
    <DropTarget targetKey="well">
      <div>
        {/* <video controls>
          <source src={FountainVideo} type="video/mp4" />
        </video> */}
        <img src={Fountain} />
      </div>
    </DropTarget>
  )
}

export default Well
