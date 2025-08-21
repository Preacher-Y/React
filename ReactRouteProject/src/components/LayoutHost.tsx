import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import { memo, } from "react";

function LayoutHost(){
    const normal = "text-gray-600 underline-offset-3 font-semibold text-sm hover:text-gray-950 hover:underline"
    const active = "text-gray-950 underline"


    return(
        <>
            <nav className="flex px-6 gap-6 my-8">
                <NavLink to="." end className={({isActive})=>clsx(normal,isActive&&active)}>Dashboard</NavLink>
                <NavLink to="income" className={({isActive})=>clsx(normal,isActive&&active)}>Income</NavLink>
                <NavLink to="vans" className={({isActive})=>clsx(normal,isActive&&active)}>Vans</NavLink>
                <NavLink to="reviews" className={({isActive})=>clsx(normal,isActive&&active)}>Reviews</NavLink>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default memo(LayoutHost)