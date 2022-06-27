import React, { useEffect, useState } from 'react'

import classes from './HeaderContact.module.css'

const HeaderContact = (props) => {
  const [search, setSearch] = useState()
  const serchHandler = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    props.onSearch(search)
  },[search, props])


  return (
    <div className={classes.header}>
      <i>
        <svg style={{ color: "#0061C2" }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </i>
      <input spellCheck={false} onChange={serchHandler} placeholder='search...' />
    </div>
  )
}

export default HeaderContact;