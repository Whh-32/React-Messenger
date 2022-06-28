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
                            <Link to='#' >
                                <i className={classes.profile}>
                                    <img src={profImg} alt="profile-pic" />
                                </i>
                            </Link>
                            <div className={classes.profMenu}>
                                <Link to='/' onClick={logoutHandler}><span>Logout</span></Link>
                            </div>
                        </>
                    }
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