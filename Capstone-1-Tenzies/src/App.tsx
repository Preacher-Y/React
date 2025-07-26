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
  const [isHeld, setIsHeld] = React.useState(false)

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(
        ():Die =>({value: Math.ceil(Math.random() * 6),isHeld:isHeld,id:nanoid()})
    )
  }
  return (
    <div className="border-40 w-full h-[100dvh] ">
      <Header/>
      <section className="max-w-lg mx-auto h-96 flex flex-col gap-3 justify-center">
        <Body dice={dice} setIsHeld={setIsHeld}/>
        <button onClick={()=>setDice(generateAllNewDice)} className="bg-blue-600 text-white w-46 rounded-2xl text-xl self-center mt-10 py-2 px-4">Roll the Dice</button>
      </section>
    </div>
  )
}
