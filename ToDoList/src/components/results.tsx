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

  const allChecked = checked.length > 0 && checked.every((v) => v);

  return (
    <section className="mt-6 relative">
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

            <button onClick={() => delTodo(i)}>
              <BiSolidTrash className="text-red-700 text-lg hover:scale-110 transition-all duration-200 ease-in-out" />
            </button>
          </li>
        ))}
      </ul>

      {allChecked && (
        <div className="bg-white text-black text-center rounded-2xl w-[80%] max-w-md mx-auto mt-6 py-4 px-6 fixed top-4 left-1/2 transform -translate-x-1/2 shadow-lg z-50">
          <h1 className="text-xl font-bold">Well Done!</h1>
          <p className="text-sm">All tasks have been finished</p>
        </div>
      )}
    </section>
  );
}
