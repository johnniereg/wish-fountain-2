import * as React from "react"
import { useState, useEffect } from "react"

import "../styles/components/wishes.scss"

const Wishes = () => {
  const [wishes, setWishes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.netlify.com/api/v1/sites/94286650-7f42-4876-a795-167e52313b8f/forms/628bd98d7a3f3700087883c5/submissions",
          {
            method: "GET",
            headers: {
              "User-Agent": "Wish Fountain (johnniereg@gmail.com)",
              Authorization:
                "Bearer fz2f7iyTqw5TI-jkshSWuT8_DdCLYUpqQdK08KrBSFs",
            },
          }
        )
        const json = await response.json()
        console.log("json", json)
        setWishes(json)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="wishes">
      <div>Wishes</div>
      {wishes.map(wish => {
        return <div key={wish.number}>{wish.title}</div>
      })}
    </div>
  )
}

export default Wishes
