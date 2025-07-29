import React,{ memo } from "react"
import Hero from "./components/hero"
import LanguagesCards from "./components/languageCards"
import { wordContext } from "./hooks/wordContext"
import { letterContext } from "./hooks/letterContext"
import Word from "./components/word"
import Keyboard from "./components/keyboard"


function App() {

  const [word,setWord] = React.useState<string>('react'.toUpperCase())
  const [letter, setLetter] = React.useState<string[]>([])

  return (
    <>
      <Hero/>
      <wordContext.Provider value={{word,setWord}}>
        <letterContext.Provider value={{letter,setLetter}}>
          <LanguagesCards/>
          <Word/>
          <Keyboard/>
        </letterContext.Provider>
      </wordContext.Provider>
      <button
      onClick={()=>alert("New Game initiated")} 
      className="px-10 py-2 bg-blue-400 font-bold text-xl text-black border rounded border-white">
        New Game
      </button>

    </>
  )
}

export default memo(App)
