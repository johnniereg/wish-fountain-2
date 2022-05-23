import React, { useState } from "react"
import { navigate } from "gatsby-link"

import "../styles/components/form.scss"

const Form = ({ isVisible, toggleForm }) => {
  const [state, setState] = useState({})

  const display = isVisible ? "block" : "none"

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const closeForm = () => {
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
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div
      className="form"
      style={{
        display: display,
      }}
    >
      <form
        name="wish-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="wish-form" value="wish" />
        <label htmlFor="text">Test</label>
        <input name="text" type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={closeForm}>Close Form</button>
    </div>
  )
}

export default Form
