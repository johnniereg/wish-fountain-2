import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Form = ({ siteTitle }) => (
  <div>
    <form>
      <label for="text">Test</label>
      <input name="text" type="text"></input>
      <input type="submit">Submit</input>
    </form>
  </div>
)

Form.propTypes = {
  siteTitle: PropTypes.string,
}

Form.defaultProps = {
  siteTitle: ``,
}

export default Form
