import * as React from "react"
import { useState } from "react"

import "../styles/components/info.scss"

import icon from "../images/question-mark.png"

const Info = () => {
  const [panelVisible, setPanelVisible] = useState(false)

  const toggleVisibility = val => {
    setPanelVisible(val)
  }

  return (
    <div className="info">
      <div className={`info__icon ${panelVisible ? "hidden" : "visible"}`}>
        <button
          onClick={() => {
            toggleVisibility(true)
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            alt="Question Mark icon to open info panel"
            className="icon"
            draggable={false}
            src={icon}
            style={{ marginBottom: 0, maxHeight: "75px" }}
          ></img>
        </button>
      </div>
      <div className={`info__panel ${panelVisible ? "visible" : "hidden"}`}>
        <div className="info__controls">
          <button
            onClick={() => {
              toggleVisibility(false)
            }}
          >
            <span>X</span>
          </button>
        </div>
        <div className={`info__wrapper `}>
          <h1 className="info__title">Wish Fountain</h1>
          <div className="info__description">
            <p>
              1. With your cursor, pick up an object, and drop it into the
              fountain.
            </p>
            <p>
              2. When prompted, submit a wish: a playful, practical, serious,
              radical, silly or imaginative desire beyond your current
              experience. Don't overthink it, or do. It's your wish.
            </p>
            <p>
              3. Submit your wish. As an act of reciprocal exchange, someone
              else's wish will be shared with you in return.
            </p>
            <p>4. That's all. You can do it again if you want.</p>
            <hr></hr>
            <p>
              Over the past few years I have been thinking deeply about wish
              fulfillment, illness, and fantasy. My obsession with these
              intertwined themes stems from my own experience receiving a wish
              trip to Disney World when I was ten, granted after I finished two
              years of treatment for Lymphoblastic Lymphoma.
            </p>
            <p>
              Wishes made with wish-granting agencies are "official" wishes,
              made within a philanthropic industry that guarantees fulfillment.
              I'm fascinated by the cultural complexity of the “wish,” a stated
              desire then realized by staff at these agencies. In this context,
              wish-fulfillment is aligned with corporate structures and
              transformed into something tangible and executable. In the
              formulation of wish-granting agencies, it is as if the illness has
              taken the place of the ritualistic wish object—the wishbone, the
              wishing well, the wish chip, the shooting star. The child wishes
              on their illness. Wish-granting agencies may appear to be fairy
              godmother-like, stating that a child may wish for anything. But,
              in reality, the wish has to be deemed achievable.
            </p>
            <p>
              <em>Wish fountain</em> represents another kind of wishing, a more
              familiar one, one that doesn't guarantee fulfillment, a stab in
              the dark, a toss into the abyss. The wish doesn't have to be
              achievable, doesn't have to make sense. You wish and in this
              context, the act of wishing returns to you a stranger's wish. This
              is my favourite part: the exchange. One wish doesn't necessarily
              yield satisfaction, but instead, yields another, revealing a
              unfurling network of wish-making. I'd like to think that the
              randomness of it all might do away with any lingering
              superstitions you may have that sharing your wish makes it
              unlikely to come true. You aren't speaking it aloud. You are
              tossing the wish into the fountain, it just turns out there is
              someone on the other side.
            </p>
            <p>Visuals and text by Hannah Doucet</p>
            <p>Code by Johnnie Regalado</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
