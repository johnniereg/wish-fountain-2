import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import Form from "../components/form"
// import * as styles from "../components/index.module.css"

// import fountain from "../images/fountain.png"
// console.log(fountain, "fountain")

const IndexPage = () => {
  return (
    <Layout>
      <StaticImage
        alt={"Wishing Well"}
        height={600}
        loading={"eager"}
        src="../images/fountain.png"
      />
      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label htmlFor={"email"}>Your Email:</label>
          <input id="email" type="email" name="email" />
        </div>
        <div>
          <label htmlFor={"message"}>Message:</label>
          <textarea id={"message"} name={"message"} />
        </div>
        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}

export default IndexPage
