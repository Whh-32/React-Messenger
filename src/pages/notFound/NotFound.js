import React from 'react'

import classes from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={classes.notFound}>
        <span>404</span>
        <span>Not Found</span>
    </div>
  )
}

export default NotFound