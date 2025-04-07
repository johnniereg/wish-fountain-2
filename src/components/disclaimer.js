import * as React from "react"

import "../styles/components/disclaimer.scss"

const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <div className="disclaimer__wrapper">
        <p className="disclaimer__text">
          <em>
          This is a project made in collaboration with Art City, all wishes must be child appropriate and free from hateful language of any kind.
          </em>
        </p>
      </div>
    </div>
  )
}

export default Disclaimer
