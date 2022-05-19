import * as React from "react"
import { useState } from "react"

import Well from "../components/well"
import Coin from "../components/coin"
import Form from "../components/form"

const App = () => {
  const [formVisibility, setFormVisibility] = useState(false)

  const toggleForm = value => {
    setFormVisibility(value)
  }

  return (
    <div>
      <h1>The Wishing Well</h1>

      <Well />

      <Coin name={"Coin 1"} toggleForm={toggleForm} />
      <Coin name={"Coin 2"} toggleForm={toggleForm} />
      <Coin name={"Coin 3"} toggleForm={toggleForm} />
      <Coin name={"Coin 4"} toggleForm={toggleForm} />
      <Coin name={"Coin 5"} toggleForm={toggleForm} />

      <Form toggleForm={toggleForm} isVisible={formVisibility} />
    </div>
  )
}

export default App
