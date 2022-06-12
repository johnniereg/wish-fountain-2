import React, { useState } from "react"

import "../styles/components/form.scss"

const Form = ({ isVisible, toggleForm, toggleWish }) => {
  const [state, setState] = useState({})

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

  const classes = isVisible ? "form__wrapper visible" : "form__wrapper hidden"

  return (
    <div className={classes}>
      <button className="close" onClick={hide}>
        X
      </button>
      <form
        className="form"
        name="wish-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="wish-form" value="wish" />
        <label htmlFor="text">Test</label>
        <input name="textarea" type="text" onChange={handleChange} />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
