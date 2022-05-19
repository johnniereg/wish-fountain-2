import * as React from "react"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import Layout from "../components/layout"
import App from "../components/app"

import "../styles/index.css"

const IndexPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <App />
      </Layout>
    </DndProvider>
  )
}

export default IndexPage
