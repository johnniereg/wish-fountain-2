import * as React from "react"
import PropTypes from "prop-types"

import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <main
      style={{
        width: `100vw`,
        height: `100vh`,
      }}
    >
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
