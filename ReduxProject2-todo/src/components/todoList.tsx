import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo, type todoListType } from "../features/todoListSlice";

export default function TodoList() {

    const todo = useSelector((state:{todoList:todoListType[]})=>state.todoList)
    const dispatch = useDispatch()

  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      <div className="flex items-center text-center justify-center flex-wrap">
        <h2 className="text-3xl font-semibold text-center text-zinc-900 dark:text-zinc-100">{todo.length>0?'Tasks':'Add Some Task'}</h2>
      </div>

      {todo.length>0 &&(<div className="mt-4 flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
        <div className="inline-flex rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
          <button type="button" data-filter="all" className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700">
            All
          </button>
          <button type="button" data-filter="active" className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Active
          </button>
          <button type="button" data-filter="completed" className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Completed
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-zinc-600 dark:text-zinc-300">Sort</label>
          <select
            id="sort"
            className="rounded-xl border  border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            defaultValue="az"
          >
            <option value="az" className="py-4 rounded">A - Z</option>
            <option value="za" className="py-4">Z - A</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" data-action="mark-all-complete" className="inline-flex items-center rounded-xl border border-zinc-200 dark:border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800">
            Mark all complete
          </button>
          <button type="button" data-action="clear-all" className="inline-flex items-center rounded-xl bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700">
            Clear all
          </button>
        </div>
      </div>)}

      <ul className="mt-4 divide-y divide-zinc-200 dark:divide-zinc-800">
        {todo.map(item => (
          <li key={item.id} className="flex items-center gap-3 py-3">
            <input
              type="checkbox"
              aria-label={item.completed ? "Completed" : "Mark complete"}
              defaultChecked={item.completed}
              disabled
              className="h-5 w-5 rounded-md border-zinc-300 dark:border-zinc-600 text-indigo-600 focus:ring-indigo-500"
            />
            <div className="flex-1">
              <p className={`text-sm sm:text-base ${item.completed ? "line-through text-zinc-400" : "text-zinc-900 dark:text-zinc-100"}`}>
                {item.task}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=>dispatch(toggleTodo(item.id))} data-action="edit" className="rounded-lg border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800">{item.completed?'UnMark':'Mark'}</button>
              <button onClick={()=>dispatch(deleteTodo(item.id))} data-action="delete" className="rounded-lg border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <div className={`mt-6 flex items-center ${todo.length>0?'justify-between':'justify-center'} text-sm text-zinc-600 dark:text-zinc-300`}>
        <span>
          Showing <strong>{todo.length}</strong> items
        </span>
        <span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"/>Complete: {<strong>{`${todo.filter(el=>el.completed).length}`}</strong>} tasks</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"/>Incomplete: {<strong>{`${todo.filter(el=>!el.completed).length}`}</strong>} tasks</span>
        </span>
      </div>
    </div>
  );
}