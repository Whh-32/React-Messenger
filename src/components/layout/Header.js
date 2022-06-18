import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Header.module.css'
import img from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.rightHeader}>
                <button>Sing Up</button>
                <i>
                    <svg style={{ color: "#0061C2" }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </i>
                <input placeholder='search...' />
            </div>
            <div className={classes.leftHeader}>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink to="/">
                                <img src={img} alt="logo" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => isActive ? classes.active : undefined}>
                                about
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header