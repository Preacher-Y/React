import React,{ useRef } from "react"
import Hero from "./components/hero"
import LanguagesCards from "./components/languageCards"
import { wordContext } from "./hooks/wordContext"
import { letterContext } from "./hooks/letterContext"
import Word from "./components/word"
import Keyboard from "./components/keyboard"
import { languages } from "./languages"
import Confetti from 'react-confetti'
import {generate} from 'random-words'


function App() {

  const [word,setWord] = React.useState<string>(generate(1)[0].toUpperCase())
  const [letter, setLetter] = React.useState<string[]>([])

  const btnRef = useRef<HTMLButtonElement|null>(null)

  const isGameFailed = letter.filter(el=> !word.includes(el)).length >= languages.length-1
  const isGameWon = [...new Set(word.split(''))].every(el=> letter.includes(el))
  
  const gameOver = isGameFailed||isGameWon
 
  function scroollFocus():void{
    setTimeout(() => {
      btnRef.current?.scrollIntoView({behavior:"smooth"})
        setTimeout(() => {
          btnRef.current?.focus()
        }, 4000);
    }, 3500);
  }
  React.useEffect(() => {
    if(gameOver){
      scroollFocus()
    }
  }, [gameOver])

  React.useEffect(() => {
    function handleRestart(e: KeyboardEvent) {
      if (gameOver && e.key === "Enter") {
        setWord(generate(1)[0].toUpperCase());
        setLetter([]);
      }
    }

    window.addEventListener("keydown", handleRestart);
    return () => window.removeEventListener("keydown", handleRestart);
  }, [gameOver]);
  

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
      ref={btnRef}
      onClick={()=>{
        setWord(generate(1)[0].toUpperCase())
        setLetter([])    
      }} 
      className="px-10 py-2 bg-blue-400 font-bold text-xl text-black border rounded border-white">
        New Game
      </button>)}

    </>
  )
}

export default App
