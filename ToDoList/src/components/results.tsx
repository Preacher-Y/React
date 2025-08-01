import { BiSolidTrash } from "react-icons/bi";
import { useTodoContext } from "../hooks/listContext";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Results() {
  const { todo, setTodo } = useTodoContext();
  const [checked, setChecked] = useState<boolean[]>([]);

  useEffect(() => {
    setChecked(Array(todo.length).fill(false));
  }, [todo]);

  const [showMessage, setShowMessage] = useState(false);
  const allChecked = checked.length > 0 && checked.every((v) => v);

  useEffect(() => {
    if (allChecked) {
        setTimeout(() => {
          setShowMessage(true);
        }, 50);
    } else {
        setShowMessage(false);
      }
  }, [allChecked]);

  const toggleChecked = (index: number) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const delTodo = (index: number): void => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    const updatedChecked = checked.filter((_, i) => i !== index);
    setTodo(updatedTodos);
    setChecked(updatedChecked);
  };


  return (todo.length > 0 && 
      (<section className="mt-6 relative">
      <p className="text-end text-sm text-red-700 font-semibold hover:underline underline-offset-2" onClick={()=>setTodo([])}>Clear All</p>
      <ul>
        {todo.map((el, i) => (
          <li key={i} className="flex justify-between items-center px-4 py-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={checked[i]}
                disabled={allChecked}
                onChange={() => toggleChecked(i)}
                className="accent-green-600 hover:scale-110 transition-all duration-900 ease-in-out"
              />
              <span className={clsx("ml-4 text-lg", { "line-through": checked[i] })}>
                {el}
              </span>
            </label>

            <button disabled={allChecked} onClick={() => delTodo(i)}>
              <BiSolidTrash className="text-red-700 text-lg hover:scale-110 transition-all duration-200 ease-in-out" />
            </button>
          </li>
        ))}
      </ul>

      <div
        className={clsx(
          "transition-all duration-500 ease-out transform fixed top-0 left-1/2 -translate-x-1/2 z-50",
          "w-[80%] max-w-md mt-6 px-6 py-4 rounded-2xl text-center shadow-lg",
          allChecked ? "bg-white text-black" : "hidden",
          showMessage ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <h1 className="text-xl font-bold">Well Done!</h1>
        <p className="text-sm">All tasks have been finished</p>
      </div>
    </section>)
  );
}
