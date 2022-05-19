import * as React from "react"
import PropTypes from "prop-types"

const Form = ({ isVisible, toggleForm }) => {
  const display = isVisible ? "block" : "none"

  const closeForm = () => {
    toggleForm(false)
  }

  return (
    <div
      style={{
        display: display,
      }}
    >
      <form>
        <label htmlFor="text">Test</label>
        <input name="text" type="text" />
        <button type="submit">Submit</button>
      </form>
      <button onClick={closeForm}>Close Form</button>
    </div>
  )
}

export default Form
