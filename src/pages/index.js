import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UsersTable from "../components/users-table"

const users = [
  {
    fname: 'Rafael',
    lname: 'Lima',
    nickname: '@rafael_leonardo_lima'
  },
  {
    fname: 'Hojae',
    lname: 'Son',
    nickname: '@hojae'
  },
  {
    fname: 'Shakaal',
    lname: 'Dajjal',
    nickname: '@Shaktiman'
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
    fname:'Cristian',
    lname: 'Chanci',
    nickname: '@cchanci'
  },
  {
    fname:'Mo',
    lname: 'Pishdar',
    nickname: '@mohpish'
  },
  {
    fname:'Rui',
    lname: 'Duarte',
    nickname: '@P0w3rb0y'
  },
    {
    fname:'Scott',
    lname: 'Simmons',
    nickname: '@devrunner'
  },
  {
    fname:'Víctor',
    lname: 'González',
    nickname: '@gonzalezdelcampo'
  },
  {
    fname:'Megha',
    lname: 'kundar',
    nickname: '@megz'
  },
  {
    fname:'Sebastian',
    lname:'Villalobos',
    nickname: '@sebiuo'
  },
  {
    fname:'Sebos',
    lname:'Bog',
    nickname: '@_bog_'
  },
  {
    fname:'Eitan',
    lname:'Segel-Lion',
    nickname: '@eitansl'
  },
  {
    fname:'Sandzaja',
    lname:'Wielka_Lechia',
    nickname: '@slechia'
  },
  {
    fname:'Abel',
    lname:'Ouedraogo',
    nickname:'@a.Ouedraogo'
  },
  {
    fname:'Denys',
    lname:'Abramov',
    nickname: '@denys.abramov.dev'
  },
  {
    fname:'Luca',
    lname:'Pattocchio',
    nickname: '@l.pattocchio'
  },
  {
    fname:'Robin',
    lname:'Valencia',
    nickname: '@robiwimarbu'
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello form SA</h1>
    <h1>Chile el mejor pais se Chile</h1>
    <h1>SERBIA NOVAK DJOKOVIC</h1>
    <h1>Michael Jackson was here</h1>
    <h1>Checkout my Mixcloud "https://www.mixcloud.com/rui_duarte/"</h1>
    <h1>Hi people of the world from India!! :)</h1>
    <h2>PloPlu</h2>
  <p>Greeting from India!!</p>
  <p>Merry Christmas 2021 :P</p>
  <p>Greetings From Egypt :D</p>
  <p>Greetings from Wroclaw!!!!</p>
  <p>Greetings From Lithuania</p>
  <p>Greetings From Moscow!!!</p>
  <p>Greetings From Serbia</p>
	<p>Greetings From Planet Earth</p>
  <p>Greetings From Ternopil</p>
  <p>Greetings from Mars</p>
  <p>Greetings from Asbury Park</p>
  <p>Greetings from Lagos</p>
  <p>Greetings from Turkey. Wish you a happy day!</p>
  <p>Greetings from India!!!</p>
  <p>Greetings from Burkina Faso</p>
  <p>Greetings from 2022</p>
  <p>welcome to awesome gitlab tutorial</p>
    <p>Welcome to the best GITLAB CI course in the World!.</p>
    <p>Welcome from Israel.</p>
    <p>Welcome from Russia.</p>
    <p>I am Powerful, I will Never Back Down</p>
    <h1>fix4)</h1>
    <h2>Changes made as part of assignment</h2>
    <h3>THIRD LEVEL OF TITLES</h3>
    <h3> From Russia with Love ЯR</h3>
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
    <p>Hello from somewhere in the world</p>
    <p>Greetings from Spain :) and from Gibraltar :) :)</p>
    <p>Greetings from Belarus :)</p>
    <p>Greetings from India :D </p>
    <p>Greetings from Romania :)</p>
    <p>Greetings from United States!</p>
    <p>Greetings from a cloudy day in Santiago, Chile</p>
    <p>Greetings from Luxembourg</p>
    <p>Greetings from Poland</p>
    <p>Greetings from India</p>
    <p>Greetings from UK</p>
    <p>Greetings from Berlin!</p>
    <p>Greetings from Ermelo!!</p>
    <p>Greetings from Divonne les Bains, France</p>
    <p>Greetings from Lausanne, Switzerland</p>
    <p>Greetings from Ukraine</p>
    <p>Greetings from Kyiv</p>
    <p>Greetings From Chicago</p>
    <p>Greetings From Almaty, Kazakhstan!</p>
    <p>Greetings From Paris, France</p>
    <p>Greetings From Toulouse, France</p>
    <p>##################</p>
    <p>HI FROM SSSWAKE :)</p>
    <p>##################</p>
    <p>Greetings from Italy</p>
    <p>Greetings from Colombia!</p>
    <p>Hello everyone! Greetings from Costa Rica!</p>
    <p>Hello! Greetings from Costa Rica x2</p>
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
    <h1> From US With Love ... </h1>
    <h2> Colombians present! greetings from Medellin! Mr. Chanci </h2>
    <UsersTable users={users} />
    <p>Greetings from Montreal!</p>
    <p>Greetings from Moscow, Russia!</p>
    <p>Greetings human beings!</p>
    <p>Greetings from Saint-Petersburg, Russia!</p>
    <p>Greetings from Tchaikovsky, Russia!</p>
    <p>Greetings from Australia!</p>
    <p>Greetings from Sydney!</p>
    <p>Greetings from Canberra!</p>
    <p>Greetings from Tel-Aviv!</p>
    <p>Greetings from Moscow, I wish you all happiness, peace and health!!</p>
    <p>Greetings from India, I wish you all happiness, peace and health!!</p>
    <p>Namaste from India, I wish you all happiness, peace and health!!</p>
    <p>Another greetings from Poland!</p>
    <p>You found a secret area</p>
    <p>Greetings from The USA! Happy Holidays!!</p>
    <p>Greetings from Sofia, Bulgaria</p>
	<p>Hi from Czech</p>
    <p>Greetings from Space!</p>
    <p>Hello from 2094 year</p>
    <p>Glory to Valentin ! The master of CI \o/</p>
    <p>Peace and support are so important values for the whole world and each person in particular</p>
    <p> Greetings from Madrid, Spain!</p>
  <p>
    Greeting from Dresden (Germany) in 2022. Hope you all had a good start
    into the new year! I cannot wait for the year of the tiger! Also, you should
    visit Dresden, it is a beatiful city and Saxony Swiss is also a great for
    taking pictures!
  </p>
    <p>Hello also from Dresden!</p>
  <p>*************************************************</p>
  <p>Hi from Portugal! :) I wish you all a nice 2022 !</p>
  <p>*************************************************</p>
  <p>
 __                              _               __
/ _   _  _  _ |_ .  _   _   _   (_  _  _   _    / _   _  _  _   _   _
\__) |  (- (- |_ | | ) (_) _)   |  |  (_) |||   \__) (- |  ||| (_| | ) \/
                       _/                                              /
  </p>
  <p>Hello from Ukraine!</p>
  <p>Valentin you are awesome!</p>
  <p>Valentine you are awesome!</p>
  <p>Greeting from Colombia! Greate practice</p>
  <p>Greeting from Italy Turin city</p>
  <p>This message will self destruct in 5 ... 4 ... 3 ...</p>
  <p>Greeting from A Coruña, Spain</p>
  <p>Luiz F Estivalet was here, greetings from Brazil, thanks for the course!</p>
  <p><i>Quidquid latine dictum sit, altum videtur</i></p>
    <p>Greetings from Singapore and also meow </p>
  <p>Greetings from Italy</p>
  <p>Hello from Spain!</p>
  <p>Hello from India,Delhi</p>
  <p>Allo from Montreal!</p>
  <p>i like donuts so much.</p>
  </Layout>
)

export default IndexPage
