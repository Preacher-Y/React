import Header from "./components/header";
import Body from "./components/body";
import React from "react";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";

export type Die = {
  value:number;
  isHeld:boolean;
  id:string
}


export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())
  const buttnRef = React.useRef<HTMLButtonElement>(null)

  const gameWon= dice.every(el=>el.value===dice[0].value) && dice.every(el=>el.isHeld)
  
  React.useEffect(()=>{
    if(gameWon && buttnRef.current){
      buttnRef.current.focus()
    }
  },[gameWon])

  function toggleHold(id: string) {
    setDice(prevDice =>
      prevDice.map(el =>
        el.id === id ? { ...el, isHeld: !el.isHeld } : el
      )
    );
  }

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(
        ():Die =>({value: Math.ceil(Math.random() * 6),isHeld:false,id:nanoid()})
    )
  }


  return (
    <div className="border-40 w-full h-[100dvh]">
      {gameWon && (<Confetti/>)}
      <p className={`absolute left-1/2 -translate-x-1/2 bottom-0  bg-white px-5 py-3 rounded-lg transition-all duration-700 ease-in-out ${gameWon ? 'opacity-100 translate-y-0 mb-7' : 'opacity-0 mb-0'}`}>🎉Congratulations! You won! Press "New Game" to start again.</p>
      <Header/>
      <section className="max-w-lg mx-auto h-96 flex flex-col gap-3 justify-center">
        <Body dice={dice} toggleHold={toggleHold}/>
        <button 
        ref={buttnRef}
        onClick={()=>gameWon? setDice(generateAllNewDice):setDice(prev=>prev.map(el=>el.isHeld?el:{...el,value:Math.ceil(Math.random() * 6)}))} 
        className="bg-blue-600 text-white w-46 rounded-2xl focus:border-3 border-black outline-none text-xl self-center mt-10 py-2 px-4">{gameWon?`New Game`:`Roll the Dice`}</button>
      </section>
    </div>
  )
}
