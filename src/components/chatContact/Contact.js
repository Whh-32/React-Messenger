import React, { Fragment } from 'react'

import classes from './Contact.module.css'

const Contact = (props) => {
    const clickHandler = () => {
        props.onClickUser(props.user)
    }
    return (
        <Fragment>
            <div onClick={clickHandler} className={classes.contact}>
                <div className={classes.avatar}>
                    <img src={props.avatar} alt="avatar" />
                </div>
                <div className={classes.description}>
                    <span>{props.name}</span>
                    <span>{props.description}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact