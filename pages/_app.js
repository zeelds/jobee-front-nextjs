import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useState } from 'react';
import '../styles/globals.css'
import Head from 'next/head';

const SearchContext = createContext("")

function MyApp({ Component, pageProps }) {

  const [search, setSearch] = useState("")

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Head>
        <title>Jobee</title>
      </Head>
      <Component {...pageProps} />
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
export default MyApp
