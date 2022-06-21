import React from 'react'

import ChatContain from '../../components/chatContain/ChatContain'
import avatar from '../../assets/images/avatar.jfif'

import classes from './Chats.module.css'
const Chats = () => {
  return (
    <div className={classes.chats}>
      <div className={classes.chatsContain}>
        <div className={classes.contacts}>
          <div className={classes.header}></div>
          <div className={classes.contactsContain}>

            <div className={classes.contact}>
              <div className={classes.avatar}>
                <img src={avatar} alt="avatar" />
              </div>
              <div className={classes.description}>
                <span>Amir0022</span>
                <span>iam web developer in col and dead dva ev</span>
              </div>
            </div>
            <div className={classes.contact}>
              <div className={classes.avatar}>
                <img src={avatar} alt="avatar" />
              </div>
              <div className={classes.description}>
                <span>Amir0022</span>
                <span>iam web developer in col and dead dva ev</span>
              </div>
            </div>

          </div>
        </div>
        <ChatContain />
      </div>
    </div>
  )
}

export default Chats