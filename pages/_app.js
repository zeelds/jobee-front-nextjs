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
import useSound from 'use-sound';
import { useRouter } from 'next/router';

const AppContext = createContext("")

function MyApp({ Component, pageProps }) {

  const router = useRouter()

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

  const [playingStatus, setPlayingStatus] = useState(false)
  const [playMain, { stop: stopMain }] = useSound("/audio/Main.mp3", {
    onend: () => {
      setPlayingStatus(false)
    }
  })
  const [playAbout, { stop: stopAbout }] = useSound("/audio/About.mp3", {
    onend: () => {
      setPlayingStatus(false)
    }
  })
  const [playAccessibility, { stop: stopAccessibility }] = useSound("/audio/Accessibility.mp3", {
    onend: () => {
      setPlayingStatus(false)
    }
  })
  const [playInbox, { stop: stopInbox }] = useSound("/audio/Inbox.mp3", {
    onend: () => {
      setPlayingStatus(false)
    }
  })
  const [playPeople, { stop: stopPeople }] = useSound("/audio/People.mp3", {
    onend: () => {
      setPlayingStatus(false)
    }
  })

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
                Ativar o assistente por áudio em seu navegador.
              </Tooltip>
            }
          >
            <Button disabled={!['/main', '/about', '/accessibility', '/inbox', '/people'].includes(router.pathname)} onClick={() => {
              stopMain()
              stopAbout()
              stopAccessibility()
              stopInbox()
              stopPeople()

              setPlayingStatus(true)

              if (router.pathname == "/main") {
                playMain()
              }

              if (router.pathname == "/about") {
                playAbout()
              }

              if (router.pathname == "/accessibility") {
                playAccessibility()
              }

              if (router.pathname == "/inbox") {
                playInbox()
              }

              if (router.pathname == "/people") {
                playPeople()
              }

            }} className={'btn rounded-circle ' + styles.unletteredFAB} color-theme={accessibilityData.color_blindness} style={{
              position: 'fixed', bottom: 0, right: 0,
              width: '64px', height: '64px', margin: 5,
              borderRadius: '100%', border: 'none',
              zIndex: '999'
            }}>
              <ButtonText color_blindness={accessibilityData.color_blindness}>
                {playingStatus == true ?
                  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                  :
                  <>
                    <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                    <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
                  </>
                }
              </ButtonText>
            </Button>
          </OverlayTrigger>
          :
          <></>
      }
    </AppContext.Provider>
  )
}

function ButtonText(props) {

  if (["Tritanomalia", "Tritanopia"].includes(props.color_blindness)) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className={"bi bi-mic " + styles.unletteredFAB} color-theme={props.color_blindness} viewBox="0 0 16 16">
        {props.children}
      </svg>
    )
  } else {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className={"bi bi-mic " + styles.unletteredFAB} color-theme={props.color_blindness} viewBox="0 0 16 16">
        {props.children}
      </svg>

    )
  }

}

export const useAppContext = () => useContext(AppContext)
export default MyApp
