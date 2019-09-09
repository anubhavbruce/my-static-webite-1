import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <h2>This is a new title</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h4>Who has changed this page:</h4>
    <table style={{ width: `50%;`, border: `2` }}>
      <tr>
        <th>First-Name</th>
        <th>Last-Name</th>
        <th>Gitlab User</th>
      </tr>
      <tbody>
        <tr>
          <td>Marcel</td>
          <td>Vuijk</td>
          <td>@mvuijk</td>
        </tr>
        <tr>
          <td>Juan Carlos</td>
          <td>Martinez</td>
          <td>@jkmrto</td>
        </tr>
        <tr>
          <td>Alejandro</td>
          <td>Melo</td>
          <td>alxmlo</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <div>Version: %%VERSION%%</div>
  </Layout>
)

export default IndexPage
