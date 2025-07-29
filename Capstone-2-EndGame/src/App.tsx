import React,{ memo } from "react"
import Hero from "./components/hero"
import LanguagesCards from "./components/languageCards"
import { wordContext } from "./hooks/wordContext"
import { letterContext } from "./hooks/letterContext"
import Word from "./components/word"
import Keyboard from "./components/keyboard"
import { languages } from "./languages"
import Confetti from 'react-confetti'


function App() {

  const [word,setWord] = React.useState<string>('react'.toUpperCase())
  const [letter, setLetter] = React.useState<string[]>([])

  const isGameFailed = letter.filter(el=> !word.includes(el)).length >= languages.length-1
  const isGameWon = [...new Set(word.split(''))].every(el=> letter.includes(el))
  
  const gameOver = isGameFailed||isGameWon

  return (
    <>
      {isGameWon && <Confetti className="w-[80%] mx-auto h-full"/>}
      <wordContext.Provider value={{word,setWord}}>
        <letterContext.Provider value={{letter,setLetter}}>
          <Hero/>
          <LanguagesCards/>
          <Word/>
          <Keyboard/>
        </letterContext.Provider>
      </wordContext.Provider>
      {gameOver && (<button
      onClick={()=>alert("New Game initiated")} 
      className="px-10 py-2 bg-blue-400 font-bold text-xl text-black border rounded border-white">
        New Game
      </button>)}

    </>
  )
}

export default memo(App)
