import * as React from "react"

import "../styles/components/form.scss"

const Form = ({ isVisible, toggleForm }) => {
  const display = isVisible ? "block" : "none"

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const closeForm = () => {
    toggleForm(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
      }),
    })
      .then(() => alert("/thank-you/"))
      .catch(error => alert(error))
  }

  return (
    <div
      className="form"
      style={{
        display: display,
      }}
    >
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="wish-form" value="wish" />
        <label htmlFor="text">Test</label>
        <input name="text" type="text" />
        <button type="submit">Submit</button>
      </form>
      <button onClick={closeForm}>Close Form</button>
    </div>
  )
}

export default Form
