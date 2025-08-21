import { Link,useLoaderData, } from "react-router-dom"

import type { VanType } from "../../type"

function Vans(){

    const data:VanType = useLoaderData()
    const id = localStorage.getItem('id');

    return(

        <div className="px-6 max-md:h-[76.5vh] mt-8 mb-16">
            <h1 className="font-bold text-3xl mb-4">Your listed vans</h1>
            <div className=" flex flex-col gap-5  py-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ">
                {data.filter((el) => el.hostId === id).map(el=>
                    <Link to={`${el.name.split(' ').join('')}`} key={el.id} className="flex justify-between rounded-md hover:shadow-xl items-center pr-3 mx-4 bg-white">
                        <div className="flex gap-3">
                            <img src={el.imageUrl} alt="" className="w-20 h-20 rounded-md "/>
                            <div className="grid py-2">
                                <h1 className="font-semibold">{el.name}</h1>
                                <p className="text-gray-700">{`$${el.price.toLocaleString()}/day`}</p>
                            </div>
                        </div>
                     </Link>)}
            </div>
        </div>
    )
}

export default Vans