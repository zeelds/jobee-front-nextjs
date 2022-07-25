import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useEffect, useState } from 'react';
import '../styles/globals.css'
import Head from 'next/head';
import axios from 'axios';
import { axiosInstance } from '../config/axios';
import { getToken, isAuth, logout } from '../config/auth';

const AppContext = createContext("")

function MyApp({ Component, pageProps }) {

  const [search, setSearch] = useState("")
  const [userData, setUserData] = useState({
    name: '',
    title: '',
    biography: '',
    avatar: '/avatar/default.png',
    isverified: false,
    gender: '',
    birthday: '',
    contact: '',
    tags: '',
    ban_info: ''
  })
  const [accessibilityData, setAccessibilityData] = useState({
    pronouns: 'Ele/Dela',
    color_blindness: 'Nenhum',
    unlettered: false
  })
  const [proData, setProData] = useState({
    invested: false,
    professional: false
  })
  const [inboxData, setInboxData] = useState([

  ])

  useEffect(() => {
    if (!isAuth()) return
    axiosInstance.get('/client/refresh-token').then((response) => {
      if (response.status == 500) {
        logout()
        Router.push('/start')
      }
    })
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
