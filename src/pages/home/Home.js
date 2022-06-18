import React from 'react'

import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.info} >
                <span className={classes.title}>
                    <span>Move faster</span>with intuitive<br/>React UI tools
                </span>
                <span className={classes.description}>
                    MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
                </span>
            </div>
        </div>
    )
}

export default Home;