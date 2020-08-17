import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UsersTable from "../components/users-table"

const users = [
  {
    fname: 'Karel',
    lname: 'Lujan',
    nickname: '@kalujan'
  },
  {
    fname: 'Rocky',
    lname: 'Balboa',
    nickname: '@adrian'
  },
  {
    fname: 'Cameron',
    lname: 'Smith',
    nickname: '@camikaze'
  },
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
    fname: 'Juju',
    lname: 'Jpo',
    nickname: '@juju.test'
  },
  {
    fname: 'Lisa',
    lname: 'Zhu',
    nickname: '@lzhu'
  },
  {
    fname: 'Gokhan',
    lname: 'Ugurel',
    nickname: '@gugurel'
  },
  {
    fname: 'Iurii',
    lname: 'N',
    nickname: '@iurii_n'
  },
  {
    fname: 'Saif',
    lname: 'Hussain',
    nickname: '@SIHussain'
  },
  {
    fname: 'Stuart',
    lname: 'Felker',
    nickname: '@stuartfe'
  },
  {
    fname: 'Justin',
    lname: 'Packer',
    nickname: '@toasty87'
  },
  {
    fname: 'Yavor',
    lname: 'Ganchev',
    nickname: '@yganchev'
  },
  {
    fname: 'Gleb',
    lname: 'T',
    nickname: 'KMD'
  },
  {
    fname: 'Esteban',
    lname: 'Arias',
    nickname: '@thiagonahuel'
  },
  {
    fname: 'Miguel',
    lname: 'Simoni',
    nickname: '@miguelsimoni'
  },
  {
    fname: 'Anaïs',
    lname: 'Pignet',
    nickname: '@thebadscarecrow'
  },
  {
    fname: 'Hector',
    lname: 'Contreras',
    nickname: '@hectorjcr'
  },
  {
    fname: 'Charlie',
    lname: 'Cianos',
    nickname: '@ccianos'
  },
  {
    fname: 'Carlos',
    lname: 'Veiga',
    nickname: '@shlayer'
  },
  {
    fname: 'Tim',
    lname: 'Zogas',
    nickname: '@tzogas'
  },
  {
    fname: 'Josh',
    lname: 'Ua',
    nickname: '@joshh'
  },
  {
    fname: 'Chris495b',
    lname: 'Ds',
    nickname: '@chris495b'
  },
    {
    fname: 'Samuel',
    lname: 'Goncalves',
    nickname: '@sgoncalves19'
  }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <h2>Nice today!</h2>
    <h3>This is a other NEW TITLE</h3>
    <h3>This is a new Pavo title</h3>
    <h3>This is another new DC title</h3>
    <h4>Who has changed this page:</h4>
    <p>Someone changed the title!</p>
    <p>It was not me :) </p>
    <h5>Don't worry. Be happy.</h5>
    <h6>ANOTHER CHANGE BY ELC.</h6>
    <h1>don't panic</h1>
    <h2>and carry a towel</h2>
    <p>Imagination is more important than knowledge.</p>
    <h7>Changing the page again</h7>
    <br />
    <UsersTable users={users} />
    <br />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>Some important words here !!</div>
    <Link to="/page-2/">Go to page 2</Link>
    <p><br /></p>
    <div>Info: Some Info about Gitlab Pipeline </div>
    <a href="https://www.google.com/">Go to Google</a>
    <div>Some test text to make a nice new paragraph!</div>
  </Layout>
)

export default IndexPage
