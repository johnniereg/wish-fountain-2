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
          "https://api.netlify.com/api/v1/sites/5d64a271-84c3-47bf-8287-8921bb45eb77/forms/67e811fcc4938600089371af/submissions",
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
