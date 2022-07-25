import React, { useState } from 'react'

import Footer from '../../components/footer/Footer'
import classes from './About.module.css'

const About = () => {
  const [click, setClick] = useState(false)
  const clickHandler = () => {
    setClick(true)
  }

  return (
    <div className={classes.about}>
      <div className={classes.contain}>
        <div className={classes.doc}>
          <h1 className={classes.title}>how to use DMessenger ?</h1>
          <p className={classes.des}>1. For the first step, you need to log in to your account.</p>
          <p className={classes.des}>2. enter the chat section in the menu.</p>
          <p className={classes.des}>3. In the opened section, select the contact you want or get help from the search.</p>
          <p className={classes.des}>4. congratulations! You can start talking to your audience.</p>
        </div>
        <div className={classes.doc}>
          <h1 className={classes.title}>Notes : </h1>
          <p className={classes.des}>1. DMessenger uses Firebase to store data.</p>
          <p className={classes.des}>2. Firebase may not be available in your country.</p>
          <p className={classes.des}>3. If you have a problem in fetching information, change your IP.</p>
          <p className={classes.des}>4. Please let us know if you have any other problems. Thanks</p>
        </div>
        <div className={classes.doc}>
          {!click && <p className={classes.des}>Was this helpful?</p>}
          <div className={classes.btns}>
            {!click ?
              <>
                <button onClick={clickHandler} className={classes.btn}>Yes</button>
                <button onClick={clickHandler} className={classes.btn}>No</button>
              </> :
              <p className={classes.des}>Thanks for your feedback !</p>
            }
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default About