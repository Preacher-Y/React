import React, { useRef } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useTodoContext } from "../hooks/listContext";
export default function Body(){
    const {todo,setTodo}=useTodoContext()
    const [alertMessage, setAlertMessage] = React.useState<string>('');

    const inputRef = useRef<HTMLInputElement|null>(null)
    const addTodo = (e:React.FormEvent):void=>{
        e.preventDefault();

        const inputValue = inputRef.current?.value.trim()

        if(!inputValue) return
        
        if(todo.includes(inputValue)){
            setAlertMessage('The Task is already in');
            setTimeout(() => {
                setAlertMessage('')
            }, 3000);
        }
        setTodo((prev)=>[...prev,inputValue]);
        inputRef.current!.value = '';
        setAlertMessage('')
    }
    return (
        <section className="mt-6">
            <form onSubmit={addTodo} className="flex justify-between gap-6 group transition-all duration-1000 ease-in-out hover:scale-105 items-center w-[80%] mx-auto px-8 py-3 rounded-full shadow-md shadow-gray-400">
                <input ref={inputRef} type="text" placeholder="Add Todo..." name="search" id="search" className="w-full outline-none" />
                
                <button
                    type="submit"
                    onClick={addTodo}
                ><FaPlusCircle className="text-green-700 text-2xl group-hover:scale-110 transition-all duration-1000 ease-in-out"/>
                </button>
            </form>
            {
                alertMessage && (
                <p id="alert" className="text-red-700 max-sm:text-sm text-xs mx-16 md:mx-26 mt-2">
                {alertMessage}
                </p>
            )}
        </section>
    )
}