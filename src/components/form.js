import React, { useState } from "react"
import { Filter } from "bad-words"

import "../styles/components/form.scss"

const Form = ({ isVisible, toggleForm, toggleWish }) => {
  const [state, setState] = useState({})
  const filter = new Filter()

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const hide = () => {
    toggleForm(false)
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    const formData = new FormData(form)
    const textarea = formData.get("textarea")


    if (!state.textarea) {
      hide()
      toggleWish(true)
    } else {
      if (filter.isProfane(textarea)) {
        console.warn("Please, no profanity.") // not submitting the wish
        hide()
        toggleWish(true)
        return
      } 
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
        .then(() => {
          hide()
          toggleWish(true)
        })
        .catch(error => alert(error))
    }
  }

  const classes = isVisible ? "form visible" : "form hidden"

  return (
    <div className={classes}>
      <div className="form__wrapper">
        <form
          className="wish-form"
          name="art-city-wish"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="wish-form" value="wish" />
          <label htmlFor="text">Toss your wish into the fountain</label>
          <textarea name="textarea" onChange={handleChange} />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
