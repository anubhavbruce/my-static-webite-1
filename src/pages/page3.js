import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Useful life hacks" />
    <h1>Hi from the third page</h1>
    <h2>Welcome to page 3</h2>
    <h3>mayberts was here</h3>
    <h3>Welcome here!</h3>
    <p>Complete the page body here</p>
    <p>Leeeet's Gooooo!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage