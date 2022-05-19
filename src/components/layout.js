import * as React from "react"
import PropTypes from "prop-types"

import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          justifyContent: `center`,
          margin: `0 auto`,
          width: `100%`,
          height: `100%`,
        }}
      >
        <main
          style={{
            width: `100%`,
            height: `100%`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
