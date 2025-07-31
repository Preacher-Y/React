
import { BiSolidTrash } from "react-icons/bi"
import { useTodoContext } from "../hooks/listContext"
import React from 'react'
import clsx from "clsx"

export default function Results(){
    const {todo,setTodo} = useTodoContext()
    const [checked, setChecked] = React.useState(false);

    const delTodo = (index:number):void=>{
        const newTodo = todo.filter((_,i)=>i!==index);
        setTodo(newTodo)
    }
    
    return(
        <section className="mt-6">
            <ul>
                {todo.map((el, i) => (
                    <li key={i} className="flex justify-between items-center px-4 py-2">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" onChange={()=>setChecked(!checked)} checked={checked} className="accent-green-600 hover:scale-110 transition-all duration-900 ease-in-out"/>
                        <span className={clsx("ml-4 text-lg",{'line-through':checked})}>{el}</span>
                    </label>

                    <button onClick={()=>delTodo(i)}>
                        <BiSolidTrash className="text-red-700 text-lg hover:scale-110 transition-all duration-200 ease-in-out" />
                    </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}