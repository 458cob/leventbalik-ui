import axios from 'axios'
import { useEffect, useState } from 'react'

//components
import Head from 'next/head'
import Nav from "../components/Nav"
import Main from "../components/Main"
import About from "../components/About"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

export default function Home() {

  const [menu, setMenu] = useState([])

  const getMenuItems = async () => {
    try {
      const {data} = await axios.get('https://leventbalikapi.herokuapp.com/menu/')
      console.log(data)
      setMenu(data.data)
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    getMenuItems()
  }, [])

  return (
    <>
      <Head>
        <title>Levent Balik Cesme</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name='description' content='Levent Balik Seafood Restaurant Cesme/Izmir TURKEY'/>
        <meta name='keywords' content='levent, cesme, cesmebalik, nimakhabbazi, 458, balik, levent balik, cesme, izmir, restaurant, turkey, 458cob, 458dev'/>
      </Head>
      <Nav/>
      <Main/>
      <About/>
      <Menu data = {menu} />
      <Footer/>
    </>
  )
}
