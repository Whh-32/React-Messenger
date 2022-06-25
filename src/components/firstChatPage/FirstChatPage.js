import React from 'react'

import classes from './FirstChatPage.module.css'
import img from '../../assets/images/chatImage.png'

const FirstChatPage = () => {
    return (
        <div className={classes.firstChatPage}>
            <div className={classes.image}>
                <img src={img} alt='chatImage' />
            </div>
            <span>
                web application that enables chat communications between the social media site's web-based messaging and smartphones.
            </span>
        </div>
    )
}

export default FirstChatPage;