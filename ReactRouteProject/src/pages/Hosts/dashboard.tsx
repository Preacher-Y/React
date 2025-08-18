import { memo } from "react"
import type { VanType } from "../../type"
import { Link,useLoaderData } from "react-router-dom"

function Dashboard(){
    
    const data:VanType = useLoaderData()

    return(
        <div className="mb-16 h-full">
            <div className="bg-[#FFEAD0] grid items-center gap-4 px-6 py-4">
                <h1 className="font-bold text-3xl">Welcome!</h1>
                <h1 className="flex justify-between text-gray-600">
                    <p className="">Income last <span className="font-bold cursor-pointer text-gray-950 underline underline-offset-3">30 days</span></p>
                    <Link to="income" className="hover:underline underline-offset-2 cursor-pointer">Details</Link>
                </h1>
                <h1 className="font-extrabold text-4xl">{`$${(2260).toLocaleString()}`}</h1>

            </div>
            <div className="flex justify-between items-center px-6 py-4 bg-[#FFDDB2]">
                <div className="flex space-x-6 items-center">
                    <h1 className="font-bold text-lg">Review score</h1>
                    <p className="flex items-center gap-1">
                        <span className="text-orange-500 text-xl">★</span>
                        <span className="text-gray-600 text-sm flex mt-1 items-center">
                            <span className="font-semibold text-base text-gray-950">5.0</span>
                            /5
                        </span>
                    </p>
                </div>
                <Link to='reviews' className="hover:underline text-gray-600 cursor-pointer underline-offset-2">Details</Link>
            </div>
            <div className="grid px-6 mt-6">
                <div className="flex justify-between items-center my-4">
                    <h1 className="font-bold text-xl">Your listed vans</h1>
                    <Link to="vans" className="hover:underline text-gray-600 cursor-pointer underline-offset-2">View all</Link>
                </div>
                <div className=" flex flex-col gap-5  py-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ">
                    {data.map(el=>
                    <Link to={`vans/${el.name.split(' ').join('')}`} key={el.id} className="flex justify-between rounded-md hover:shadow-xl items-center pr-3 mx-4 bg-white">
                        <div className="flex gap-3">
                            <img src={el.imageUrl} alt="" className="w-20 h-20 rounded-md "/>
                            <div className="grid py-2">
                                <h1 className="font-semibold">{el.name}</h1>
                                <p className="text-gray-700">{`$${el.price.toLocaleString()}/day`}</p>
                            </div>
                        </div>
                        <button className="hover:underline text-gray-600 cursor-pointer underline-offset-2">Edit</button>
                    </Link>)}
                </div>
            </div>
        </div>
    )
}

export default memo(Dashboard)