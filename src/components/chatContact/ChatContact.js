import React, { useContext, useEffect, useState } from 'react'

import AuthContext from '../../store/auth-context'
import classes from './ChatContact.module.css'
import Contact from './Contact'

const ChatContact = (props) => {
  const authCtx = useContext(AuthContext);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setISLoading] = useState(false);
  const [user, setUser] = useState('')

  useEffect(() => {
    setISLoading(true)
    fetch('https://react-messenger-7d63b-default-rtdb.firebaseio.com/contact.json')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setISLoading(false)
        let info = [];
        setContacts(info)
        for (const key in data) {
          info.push({
            key: key,
            name: data[key].name,
            avatar: data[key].photo,
            description: data[key].description,
            user: data[key].user
          })
        }
      })
  }, []);

  const sendUser = (user) => {
    setUser(user)
  }
  useEffect(() => {
    props.onGetUser(user);
  }, [user, props])

  return (
    <div className={classes.contacts}>
      <div className={classes.header}>

      </div>
      <div className={classes.contactsContain}>
        {isLoading && <div className={classes.loading}></div>}
        {!isLoading &&
          contacts.map(contact => (
            contact.user !== authCtx.user &&
            <Contact
              onClickUser={sendUser}
              key={contact.key}
              name={contact.name}
              avatar={contact.avatar}
              description={contact.description}
              user={contact.user}
            />
          ))}
      </div>
    </div>
  )
}

export default ChatContact;