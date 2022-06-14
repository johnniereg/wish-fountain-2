import * as React from "react"

import "../styles/components/disclaimer.scss"

const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <div className="disclaimer__wrapper">
        <p className="disclaimer__text">
          <em>
            Please do not use any racist, sexist, homophobic, ableist or
            otherwise hateful language
          </em>
        </p>
      </div>
    </div>
  )
}

export default Disclaimer
