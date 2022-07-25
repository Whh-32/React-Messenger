import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import AuthContext from '../../store/auth-context'
import classes from './ChatContact.module.css'
import Contact from './Contact'
import HeaderContact from './HeaderContact'

const ChatContact = (props) => {
  const authCtx = useContext(AuthContext);
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setISLoading] = useState(false);
  const [user, setUser] = useState();
  const [index, setIndex] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === '/Contacts' && setIndex(false)
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
  }, [pathname]);

  const sendUser = (user) => {
    setUser(user);
  }

  const searchHandler = (text) => {
    setSearch(text === undefined ? '' : text)
  }

  useEffect(() => {
    props.onGetUser(user);
  }, [user, props])

  return (
    <div className={`${index ? classes.smallClass : ''} ${classes.contacts}`} >
      <HeaderContact onSearch={searchHandler} />
      <div className={classes.contactsContain}>
        {isLoading && <div className={classes.loading}></div>}
        {!isLoading &&  
        contacts.filter(contact => (contact.user !== authCtx.user && contact.name.includes(search.toLowerCase())))
        .map(contact => 
        <div key={contact.key} onClick={() => setIndex(contact.key)} className={`${contact.key === index ? classes.active : ''} ${classes.contact}`}
        >
          <Contact
            onClickUser={sendUser}
            name={contact.name}
            avatar={contact.avatar}
            description={contact.description}
            user={contact.user}
          />
        </div>)
        }
      </div>
    </div>
  )
}

export default ChatContact;