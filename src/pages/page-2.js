import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <h2>Welcome! </h2>
    <p>You are on page 2</p>
    <p>Don&apos;t forget to wash your hands with soap.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
