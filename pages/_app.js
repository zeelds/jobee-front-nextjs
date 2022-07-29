import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useEffect, useState } from 'react';
import '../styles/globals.css'
import styles from '../styles/Main.module.css'
import Head from 'next/head';
import axios from 'axios';
import { axiosInstance } from '../config/axios';
import { getToken, isAuth, logout } from '../config/auth';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';

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
    axiosInstance.get('/client/get-user').then((response) => {
      setProData({
        invested: response.data.data.proStatus.invested,
        professional: response.data.data.proStatus.professional
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
      {
        accessibilityData.unlettered ?
          //<UnletteredButton color_blindness={accessibilityData.color_blindness} />
          <OverlayTrigger
            placement={'left'}
            overlay={
              <Tooltip id={`tooltip-top`}>
                Navegador não suporta comando por voz.
              </Tooltip>
            }
          >
            <Button className={'btn rounded-circle ' + styles.unletteredFAB} color-theme={accessibilityData.color_blindness} style={{
              position: 'fixed', bottom: 0, right: 0,
              width: '64px', height: '64px', margin: 5,
              borderRadius: '100%', border: 'none'
            }}>
              {setButtonText(accessibilityData.color_blindness)}
            </Button>
          </OverlayTrigger>
          :
          <></>
      }
    </AppContext.Provider>
  )
}


function setButtonText(color_blindness) {

  if (["Tritanomalia", "Tritanopia"].includes(color_blindness)) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className={"bi bi-mic " + styles.unletteredFAB} color-theme={color_blindness} viewBox="0 0 16 16">
        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className={"bi bi-mic " + styles.unletteredFAB} color-theme={color_blindness} viewBox="0 0 16 16">
      <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
    </svg>
  )

}

export const useAppContext = () => useContext(AppContext)
export default MyApp
