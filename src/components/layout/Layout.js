import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import classes from "./Layout.module.css"

const Layout = () => {
    return (
        <div>
            <Header />
            <main className={classes.main}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout