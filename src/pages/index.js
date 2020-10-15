import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UsersTable from "../components/users-table"

const users = [
  {
    fname: 'NeilNader',
    lname: 'N/A',
    nickname: '@neilnader'
  }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people of the world!</h1>
    <h2>CHanges made as part of assignment</h2>
    <p>A wise developer once told said, Fork N/A</p>
    <p>Arm Change</p>
    <br />
    <UsersTable users={users} />
  </Layout>
)

export default IndexPage
