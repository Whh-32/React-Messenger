import React from 'react'

import classes from './Home.module.css'
import img from '../../assets/images/poster.webp'

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.contain}>
                <div className={classes.info} >
                    <span className={classes.title}>
                        <span>HANG OUT</span>ANYTIME,<br />ANYWHERE
                    </span>
                    <span className={classes.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem vero maiores maxime doloremque. Dolorem eos ad vitae odit commodi delectus amet ut, tenetur incidunt magni deserunt, deleniti, consequuntur repellendus.
                    </span>
                </div>
                <div className={classes.poster}>
                    <img src={img} alt="poster" />
                </div>
            </div>
            <div className={classes.contain}>
                <span className={classes.des}>
                    DMessenger makes it easy and fun to stay close to your favourite people.
                </span>
            </div>
        </div>
    )
}

export default Home;