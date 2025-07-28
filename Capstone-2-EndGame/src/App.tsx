import React,{ memo } from "react"
import Hero from "./components/hero"
import LanguagesCards from "./components/languageCards"
import { wordContext } from "./hooks/wordContext"
import Word from "./components/word"
import Keyboard from "./components/keyboard"


function App() {

  const [word,setWord] = React.useState<string>('react')

  return (
    <>
      <Hero/>
      <wordContext.Provider value={word}>
        <LanguagesCards/>
        <Word/>
        <Keyboard/>
      </wordContext.Provider>

    </>
  )
}

export default memo(App)
