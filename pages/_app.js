import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useEffect, useState } from 'react';
import '../styles/globals.css'
import Head from 'next/head';
import axios from 'axios';
import { axiosInstance } from '../config/axios';

const AppContext = createContext("")

function MyApp({ Component, pageProps }) {

  const [search, setSearch] = useState("")
  const [userData, setUserData] = useState({
    name: 'Marília Santos',
    title: 'Designer Gráfica / Empresária / Compradora',
    biography: 'Marília Santos é uma ótima designer de 26 anos que tem um amor muito grande pelo que faz.',
    avatar: '/avatar/avatar.png',
    isverified: false,
    gender: 'Feminino',
    birthday: '22/02/1996',
    contact: 'Zarizap amor',
    tags: 'Nenhuma',
    ban_info: 'Nenhuma'
  })
  const [accessibilityData, setAccessibilityData] = useState({
    pronouns: 'Ela/Dela',
    color_blindness: 'Nenhuma',
    unlettered: false
  })
  const [proData, setProData] = useState({
    invested: false,
    professional: false
  })
  const [inboxData, setInboxData] = useState([
    
  ])

  useEffect(() => {
    axiosInstance.get('/client/get-user').then((response) => {
      setProData({
        invested: response.data.data.invested,
        professional: response.data.data.isPro
      })
      setUserData(response.data.data.foundUser.data)
    })
    axiosInstance.get('/client/get-accessibility').then((response) => {
      setAccessibilityData({
        pronouns: response.data.data.data.pronouns,
        color_blindness: response.data.data.data.color_blindness,
        unlettered: response.data.data.data.unlettered
      })
    })
  }, [])

  return (
    <AppContext.Provider value={{
      search: [search, setSearch],
      user: [userData, setUserData],
      accessibility: [accessibilityData, setAccessibilityData],
      pro: [proData, setProData],
      inbox: [inboxData, setInboxData]
    }}>
      <Head>
        <title>Jobee</title>
      </Head>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
export default MyApp
