import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UsersTable from "../components/users-table"

const users = [
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
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <ul>
      <li>My own merge request</li>
      <li>This is a new title</li>
      <li>New li added here</li>
      <li>This is another new li :P</li>
      <li>And another new li to test 2</li>
      <li>Wake up Neo ! ... The Matrix has you.</li>
    </ul>
    <p>Welcome to your new Gatsby site.</p>
    <p>this is the paragraph added by a participant</p>
    <p>Now go build something great.</p>
    <h4>Who has changed this page:</h4>
    <div>
        Adding simple paragraph before the table
    </div>
    <div>
      Little hello from France !... Have a nice day ...
    </div>
    <div>
      This is a message from Perú: Buenos días a todos.
    </div>
    <br />
    <UsersTable users={users} />
    <br />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
