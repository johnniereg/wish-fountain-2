import * as React from "react"
import { useState } from "react"

import "../styles/components/app.scss"

import Well from "../components/well"
import Coin from "../components/coin"
import Form from "../components/form"
import Info from "../components/info"

const App = () => {
  const [formVisibility, setFormVisibility] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div className="app">
      <h1>The Wishing Well</h1>

      <Well isDragging={isDragging} />

      <Coin
        name={"Coin 1"}
        toggleForm={setFormVisibility}
        isDragging={setIsDragging}
      />
      <Coin
        name={"Coin 2"}
        toggleForm={setFormVisibility}
        isDragging={setIsDragging}
      />
      <Coin
        name={"Coin 3"}
        toggleForm={setFormVisibility}
        isDragging={setIsDragging}
      />
      <Coin
        name={"Coin 4"}
        toggleForm={setFormVisibility}
        isDragging={setIsDragging}
      />
      <Coin
        name={"Coin 5"}
        toggleForm={setFormVisibility}
        isDragging={setIsDragging}
      />

      <p>Please no sexist, racist, homophobic, hateful language</p>

      <Form toggleForm={setFormVisibility} isVisible={formVisibility} />
      <Info />
    </div>
  )
}

export default App
