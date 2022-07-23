import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useState } from 'react';
import '../styles/globals.css'
import Head from 'next/head';

const AppContext = createContext("")

function MyApp({ Component, pageProps }) {

  const [search, setSearch] = useState("")
  const [userData, setUserData] = useState({})
  const [accessibilityData, setAccessibilityData] = useState({})
  const [inboxData, setInboxData] = useState([])

  return (
    <AppContext.Provider value={{
      search: [search, setSearch],
      user: [userData, setUserData],
      accessibilityDataData: [accessibilityData, setAccessibilityData],
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
