import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useState } from 'react';
import '../styles/globals.css'

const SearchContext = createContext("")

function MyApp({ Component, pageProps }) {

  const [search, setSearch] = useState("")

  return (
    <SearchContext.Provider value={{search, setSearch}}>
      <Component {...pageProps} />
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
export default MyApp
