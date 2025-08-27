import { useRef } from "react";
import { addTodo } from "../features/todoListSlice";
import { useDispatch, useSelector } from "react-redux";
import type { todoListType } from "../features/todoListSlice";

export default function TodoInput() {

  const ref = useRef<HTMLInputElement|null>(null)
  const todo = useSelector((state:{todoList:todoListType[]})=>state.todoList)
  const dispatch = useDispatch()

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault()
    if(ref.current?.value){
      dispatch(addTodo({
        id:todo.length === 0 ? 1 : todo[todo.length-1].id + 1 ,
        task: ref.current.value,
        completed: false
      }))
      ref.current.value = ''
    }
  }
  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Add a task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="todoText" className="sr-only">Task</label>
        <input
          ref={ref}
          id="todoText"
          type="text"
          placeholder="Add your activities"
          className="flex-1 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSubmit}
          data-action="add-todo"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </form>
    </div>
  );
}
