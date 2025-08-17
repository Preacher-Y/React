import Header from "./header"
import Footer from "./footer"

import { memo } from "react"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">

            <Header />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default memo(Layout)
