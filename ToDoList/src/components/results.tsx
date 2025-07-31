
import { BiSolidTrash } from "react-icons/bi"
import { useTodoContext } from "../hooks/listContext"
import React from 'react'
import clsx from "clsx"
export default function Results(){
    const {todo,setTodo} = useTodoContext()
    const inputRef = React.useRef<HTMLInputElement|null>(null)
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
                        <input type="checkbox" onChange={()=>setChecked(!checked)} checked={checked} className="accent-green-600"/>
                        <span className={clsx({'line-through':checked})}>{el}</span>
                    </label>

                    <button onClick={()=>delTodo(i)}>
                        <BiSolidTrash className="text-red-700 text-lg" />
                    </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}