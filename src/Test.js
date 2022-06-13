import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Test = () => {
    const active = { color: "red" }
    return (
        <div>
            <nav>
                <NavLink
                    to="/"
                    style={({isActive}) =>
                        isActive ? active : undefined
                    }
                >
                    home
                </NavLink>
                <NavLink
                    to="/Quots"
                    style={({isActive}) =>
                        isActive ? active : undefined
                    }
                >
                    Quots
                </NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Test