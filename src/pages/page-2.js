import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Useful life hacks" />
    <h1>Hi from the second page</h1>
    <h2>Welcome to page 2</h2>
    <h3>mayberts was here</h3>
    <h3>This is a H3 title</h3>
    <p>Complete the page body here</p>
    <p>Don&apos;t forget to wash your hands with soap.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
