import clsx from "clsx"
import { NavLink } from "react-router-dom"


function header() {

  const normal = "underline-offset-3 text-sm hover:text-zinc-300 hover:underline"
  const active = "text-zinc-400 underline"

  return (
    <header className="bg-zinc-50 dark:bg-zinc-800 text-zinc-900 flex justify-center gap-10 py-4 dark:text-zinc-50">
        <NavLink to={'/'} className={({ isActive }) => clsx(normal, isActive && active)}>TodoList App</NavLink>
        <NavLink to={'fetch'} className={({ isActive }) => clsx(normal, isActive && active)}>FetchUser App</NavLink>
        <NavLink to={'theme'} className={({ isActive }) => clsx(normal, isActive && active)}>ThemeToggle App</NavLink>
    </header>
  )
}

export default header