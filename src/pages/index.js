import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UsersTable from "../components/users-table"

const users = [
  {
    fname: 'Canberk',
    lname: 'K',
    nickname: '@unkown'
  },
  {
    fname: 'Rogers',
    lname: 'Ma',
    nickname: '@sobermrz'
  },
  {
    fname: 'Orhan',
    lname: 'KALAYCI',
    nickname: '@orhankalayci-devopscu'
  },
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
  },
  {
    fname: 'Vitalii',
    lname: 'Savinov',
    nickname: '@vitsavinov'
  },
  {
    fname: 'Armando',
    lname: 'Ayala',
    nickname: '@armandoayala'
  },
  {
    fname:'Jose',
    lname: 'Mourinho',
    nickname: '@TheSpecialOne'
  },
  {
    fname:'Chris',
    lname: 'Tian',
    nickname: '@seranxx'
  },
  {
    fname:'Maksim',
    lname: 'Khitrov',
    nickname: '@khitrov.maks'
  },
  {
    fname:'Ola',
    lname: 'S',
    nickname: '@sidorowicz-aleksandra'
  },
  {
    fname:'Nicola',
    lname: 'Zippo',
    nickname: '@nzsystems'
  },
  {
    fname:'Gangadhar',
    lname: 'Hariharan',
    nickname: '@ganga'
  },
  {
    fname:'Sander',
    lname: 'B',
    nickname: '@null'
  },
  {
    fname:'Lucas',
    lname: 'Mendes',
    nickname: '@lbmendes'
  },
  {
    fname:'Nursultan',
    lname: 'Kalniyazov',
    nickname: '@sultanka_real'
  },
  {
    fname:'Nelson',
    lname: 'Pacheco',
    nickname: '@nelsoned'
  },
  {
    fname:'Vladimir',
    lname: 'Hale',
    nickname: '@vladah'
  },
  {
    fname:'Rui',
    lname: 'Duarte',
    nickname: '@P0w3rb0y'
  }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Checkout my Mixcloud "https://www.mixcloud.com/rui_duarte/"</h1>
    <h1>Hi people of the world from India!! :)</h1>
  <p>Greetings from Wroclaw!!!!</p>
  <p>Greetings From Moscow!!!</p>
  <p>Greetings From Serbia</p>
	<p>Greetings From Planet Earth</p>
  <p>Greetings from Mars</p>
  <p>welcome to awesome gitlab tutorial</p>
    <p>Welcome to the best GITLAB CI course in the World!.</p>
    <p>Welcome from Israel.</p>
    <h1>fix4)</h1>
    <h2>Changes made as part of assignment</h2>
    <h3>THIRD LEVEL OF TITLES</h3>
    <h4>FOURTH LEVEL OF TITLES</h4>
    <p>A wise developer once told said, Fork N/A</p>
    <p>I think I know that guy!</p>
    <p>Arm Change</p>
    <p>This is my additional text</p>
    <br />
    <h2>This is a brand new paragraph!</h2>
    <p>Assignment 5 merge request, new paragraph</p>
    <p>Being crazy isnt enough. - Dr. Seuss</p>
    <p>Greetings from Germany :) and from Italy :) :)</p>
	<p>Greeting from all Slavs!</p>
    <p>Seasons greetings from Germany ;-)</p>
    <p>Greetings from Spain :) and from Gibraltar :) :)</p>
    <p>Greetings from Belarus :)</p>
    <p>Greetings from India :D </p>
    <p>Greetings from Romania :)</p>
    <p>Greetings from United States!</p>
    <p>Greetings from a cloudy day in Santiago, Chile</p>
    <p>Greetings from Luxembourg</p>
    <p>Greetings from Poland</p>
    <p>Greetings from India</p>
    <p>Greetings from Berlin!</p>
    <p>Greetings from Ermelo!!</p>
    <p>Greetings from Divonne les Bains, France</p>
    <p>##################</p>
    <p>HI FROM SSSWAKE :)</p>
    <p>##################</p>
    <p>Greetings from Italy</p>
    <p>Greetings from Colombia!</p>
    <p>Hello everyone! Greetings from Costa Rica!</p>
    <p>Greetings from North America</p>
    <p>Greetings from sunny Manchester, UK</p>
    <p> Greetings from Russia!</p>
    <p>Greetings from Malaga, Spain!</p>
    <p>Hello my friend, stay awhile and listen.</p>
    <p>it is me, ur birdie</p>
    <p>Greetings from the Netherlands</p>
    <section><p>Here is a new information to be learn.</p></section>
    <p title="Hello :)">Greeting from Chile!</p>
    <h1> Hello From Khaja from Canada </h1>
    <p>Greetings from Luxembourg!</p>
    <h2> GREETINGS FROM BOLIVIA </h2>
    <p>Cowabunga!!!</p>
    <h1> GREETINGS FROM RUSSIA (again) </h1>
    <h1> GREETINGS FROM brazil 25/06/21</h1>
    <h1> GREETINGS FROM TURKEY 25/06/21</h1>
    <h1> From US With Love ... </h1>
    <UsersTable users={users} />
    <p>Greetings from Montreal!</p>
  </Layout>
)

export default IndexPage
