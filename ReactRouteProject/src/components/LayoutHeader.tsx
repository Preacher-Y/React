import Header from "./header"
import Footer from "./footer"

import { memo } from "react"
import { Outlet } from "react-router-dom"

function Layout(){
    return (
        <>
            <Header/>

            <main className="md:h-screen lg:h-full">
                <Outlet/>
            </main>

            <Footer/>
        </>
    )
}

export default memo(Layout)