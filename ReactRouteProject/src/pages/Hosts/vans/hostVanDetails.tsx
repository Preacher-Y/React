import { memo } from "react"
import { Link,NavLink,Outlet,useParams,useLoaderData } from "react-router-dom"
import clsx from "clsx"

import type { VanType } from "../../../type"

function HostVansDetails(){

    const {name}= useParams()
    const data:VanType = useLoaderData()

    const normal = "text-gray-600 underline-offset-3 font-semibold text-sm hover:text-gray-950 hover:underline"
    const active = "text-gray-950 underline"

    return(
        
        <div className="px-6 mt-8 mb-16">

            <Link to=".." relative="path" className="text-black/60 text-sm flex items-center gap-1 underline underline-offset-2 ">
                <span className="icon-[material-symbols--arrow-left-alt]"/>
                Back to vans
            </Link>

            <div className="flex flex-col px-2">

                {data.map(el=> el.name.split(' ').join('')===name &&(
                <div key={el.id}>
                    <div className="my-4">
                        <article className="flex items-center gap-5">
                            <img src={el.imageUrl} alt={el.name} className="h-46 "/>
                            <div className="grid gap-2">
                                <h1
                                    className={[
                                    "mt-3 inline-block rounded px-4 py-1 mr-auto text-sm text-white tracking-wide",
                                    el.type === "Simple" && "bg-[#E17654]",
                                    el.type === "Luxury" && "bg-black",
                                    el.type === "Rugged" && "bg-emerald-800"
                                    ]
                                    .filter(Boolean)
                                    .join(" ")}
                                >{el.type}</h1>
                                <h1 className="font-bold text-3xl">{el.name}</h1>
                                <h2 className="text-sm"><span className="font-bold text-[20px]">${el.price}</span>/day</h2>

                            </div>
                        </article>
                    </div>

                    <nav className="flex gap-6 my-4">
                        <NavLink to="." end className={({isActive})=>clsx(normal,isActive&&active)}>Details</NavLink>
                        <NavLink to="pricing" className={({isActive})=>clsx(normal,isActive&&active)}>Pricing</NavLink>
                        <NavLink to="photos" className={({isActive})=>clsx(normal,isActive&&active)}>Photos</NavLink>
                    </nav>
                    
                    <main>
                        <Outlet context={{van:el}}/>
                    </main>
                </div>
                ))}
            </div>

        </div>
    )
}

export default memo(HostVansDetails)