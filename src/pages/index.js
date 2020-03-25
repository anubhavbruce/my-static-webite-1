import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UsersTable from "../components/users-table"

const users = [
  {
    fname: 'Rachel',
    lname: 'Smith',
    nickname: '@rachel'
  },
  {
    fname: 'Marcel',
    lname: 'Marcel',
    nickname: '@mvuijk'
  },
  {
    fname: 'Juan Carlos',
    lname: 'Martinez',
    nickname: '@jkmrto'
  },
  {
    fname: 'Alejandro',
    lname: 'Melo',
    nickname: '@alxmlo'
  },
  {
    fname: 'Pedro',
    lname: 'Capdevila',
    nickname: '@pcapdevila'
  },
  {
    fname: 'Michel',
    lname: 'Kreutner',
    nickname: '@mik57'
  },
  {
    fname: 'Artem',
    lname: 'Holinka',
    nickname: '@artem.holinka'
  },
    {
    fname: 'Aline',
    lname: 'Aline',
    nickname: '@aline.test'
  },
  {
    fname: 'abr',
    lname: 'abr',
    nickname: '@abr.test'
  },
  {
    fname: 'Oleksandr',
    lname: 'Panchenko',
    nickname: '@fafko93'
  },
  {
    fname: 'Lisa',
    lname: 'Zhu',
    nickname: '@lzhu'
  }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <h4>Who has changed this page:</h4>
    <br />
    <UsersTable users={users} />
    <br />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>Some important words</div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
