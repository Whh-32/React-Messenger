import React, { useContext, useEffect, useState } from 'react'

import AuthContext from '../../store/auth-context';
import ChatContact from '../../components/chatContact/ChatContact'
import ChatContain from '../../components/chatContain/ChatContain'
import classes from './Chats.module.css'

const Chats = () => {
  const authCtx = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [chatId, setChatId] = useState()

  const getUserId = (user) => {
    setUser(user)
  }

  useEffect(() => {
    if (!user) {
      return
    }

    let chatID;
    fetch('https://react-messenger-7d63b-default-rtdb.firebaseio.com/chats.json')
      .then(res => {return res.json()})
      .then(data => {
        if (data === null) {
          fetch('https://react-messenger-7d63b-default-rtdb.firebaseio.com/chats.json', {
            method: 'POST',
            body: JSON.stringify({
              id: authCtx.user + user,
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(res => {return res.json()})
            .then(data => {
              // console.log(data.name);
              setChatId(data.name);
            })
        } else {
          for (const key in data) {
            if (data[key].id === user + authCtx.user || data[key].id === authCtx.user + user) {
              chatID = key
              setChatId(key)
            }
          }

          if (chatID === undefined) {
            fetch('https://react-messenger-7d63b-default-rtdb.firebaseio.com/chats.json', {
              method: 'POST',
              body: JSON.stringify({
                id: authCtx.user + user,
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(res => {return res.json()})
              .then(data => {
                // console.log(data.name);
                setChatId(data.name);
              })
          }
        }
      })
  }, [authCtx.user, user])

  return (
    <div className={classes.chats}>
      <div className={classes.chatsContain}>
        <ChatContact onGetUser={getUserId} />
        <ChatContain key={chatId} chatId={chatId} />
      </div>
    </div>
  )
}

export default Chats