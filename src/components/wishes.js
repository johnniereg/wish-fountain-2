import * as React from "react"
import { useState, useEffect } from "react"

import "../styles/components/wishes.scss"

const Wishes = () => {
  const [wishes, setWishes] = useState(["test", "test2"])

  useEffect(() => {
    fetch(
      "https://api.netlify.com/api/v1/sites/94286650-7f42-4876-a795-167e52313b8f/forms",
      {
        method: "GET",
        headers: {
          "User-Agent": "Wish Fountain (johnniereg@gmail.com)",
          Authorization: "Bearer fz2f7iyTqw5TI-jkshSWuT8_DdCLYUpqQdK08KrBSFs",
        },
      }
    )
      .then(response => {
        console.log(response, "response")
        response.json()
      })
      .then(response => {
        if (response) setWishes(response)
      })
  }, [])

  return (
    <div className="wishes">
      {wishes.forEach(wish => {
        return <div key={wish.id}>{wish}</div>
      })}
    </div>
  )
}

export default Wishes
