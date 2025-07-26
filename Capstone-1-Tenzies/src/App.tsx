import Header from "./components/header";
import Body from "./components/body";
import React from "react";
import { nanoid } from "nanoid";

export type Die = {
  value:number;
  isHeld:boolean;
  id:string
}

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())
  
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
    <div className="border-40 w-full h-[100dvh] ">
      <Header/>
      <section className="max-w-lg mx-auto h-96 flex flex-col gap-3 justify-center">
        <Body dice={dice} toggleHold={toggleHold}/>
        <button 
        onClick={()=>setDice(prev=>prev.map(el=>el.isHeld?el:{...el,value:Math.ceil(Math.random() * 6)}))} 
        className="bg-blue-600 text-white w-46 rounded-2xl text-xl self-center mt-10 py-2 px-4">{dice.every(el=>el.isHeld===true)?`Start Again`:`Roll the Dice`}</button>
      </section>
    </div>
  )
}
