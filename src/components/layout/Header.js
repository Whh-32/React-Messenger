import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import classes from './Header.module.css'
import img from '../../assets/images/logo.svg'
import profImg from '../../assets/images/icons8-person-24.png'
import AuthContext from '../../store/auth-context'

const Header = () => {
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout()
    }

    return (
        <header className={classes.header}>
            <div className={classes.contain}>
                <div className={classes.rightHeader}>
                    {!authCtx.isLogin &&
                        <Link to='/Login' ><button>Login</button></Link>
                    }
                    {authCtx.isLogin &&
                        <>
                            <Link to='/404' >
                                <i className={classes.profile}>
                                    <img src={profImg} alt="profile-pic" />
                                </i>
                            </Link>
                            <div className={classes.profMenu}>
                                <Link to='/hello' ><span>Profile</span></Link>
                                <Link to='/' onClick={logoutHandler}><span>Logout</span></Link>
                            </div>
                        </>
                    }
                    {/* <i>
                        <svg style={{ color: "#0061C2" }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </i>
                    <input placeholder='search...' /> */}
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
                            {authCtx.isLogin &&
                                <li>
                                    <NavLink to="/Contacts" className={({ isActive }) => isActive ? classes.active : undefined}>
                                        Chats
                                    </NavLink>
                                </li>}
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
            </div>
        </header>
    )
}

export default Header