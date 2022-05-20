import * as React from "react"
import { isMobile } from "react-device-detect"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"

import Layout from "../components/layout"
import App from "../components/app"

import "../styles/index.css"

const IndexPage = () => {
  if (isMobile) {
    return (
      <DndProvider backend={TouchBackend}>
        <Layout>
          <App />
        </Layout>
      </DndProvider>
    )
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <App />
      </Layout>
    </DndProvider>
  )
}

export default IndexPage
