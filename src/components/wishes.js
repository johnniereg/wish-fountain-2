import * as React from "react"
import { useState, useEffect } from "react"

import "../styles/components/wishes.scss"

const Wishes = ({ isVisible, toggleVisibility }) => {
  const [wish, setWish] = useState({})
  const [wishes, setWishes] = useState([])

  const hide = () => {
    toggleVisibility(false)
    setWish(wishes[Math.floor(Math.random() * wishes.length)])
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let wish
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
        if (json.length) {
          setWishes(json)
          wish = json[Math.floor(Math.random() * json.length)] // pick a random wish
        } else {
          wish = {
            body: "No one has made a wish... yet...",
          }
        }
        setWish(wish)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className={`wishes ${isVisible ? "visible" : "hidden"}`}>
      <div className="wishes__wrapper">
        <div className="wishes__text">
          <p>{wish.body}</p>
        </div>
        <button className="wishes__close" onClick={hide}>
          X
        </button>
      </div>
    </div>
  )
}

export default Wishes
