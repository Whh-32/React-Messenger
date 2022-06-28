import React from 'react'

import Footer from '../../components/footer/Footer'
import classes from './About.module.css'

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.contain}>
        <Footer />
      </div>
    </div>
  )
}

export default About