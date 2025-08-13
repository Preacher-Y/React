import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import { memo } from "react";

function LayoutHost(){

    const normal = "text-gray-600 underline-offset-3 text-sm hover:text-gray-950 hover:underline"
    const active = "text-gray-950 underline"


    return(
        <>
            <nav className="flex gap-6 my-8">
                <NavLink to="" className={({isActive})=>clsx(normal,isActive&&active)}>Dashboard</NavLink>
                <NavLink to="income" className={({isActive})=>clsx(normal,isActive&&active)}>Income</NavLink>
                <NavLink to="reviews" className={({isActive})=>clsx(normal,isActive&&active)}>Reviews</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}

export default memo(LayoutHost)