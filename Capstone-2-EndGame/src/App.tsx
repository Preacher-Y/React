import React,{ memo } from "react"
import Hero from "./components/hero"
import LanguagesCards from "./components/languageCards"
import { wordContext } from "./hooks/wordContext"
import Word from "./components/word"


function App() {

  const [word,setWord] = React.useState<string>('react')

  return (
    <>
      <Hero/>
      <wordContext.Provider value={word}>
        <LanguagesCards/>
        <Word/>
      </wordContext.Provider>

    </>
  )
}

export default memo(App)
