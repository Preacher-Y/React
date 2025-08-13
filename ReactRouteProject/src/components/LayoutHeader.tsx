import Header from "./header"
import Footer from "./footer"

import { memo } from "react"
import { Outlet } from "react-router-dom"

function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default memo(Layout)