import React, { useState } from 'react'

import classes from './ChatContain.module.css'

const ChatContain = () => {
    const [message, setMessage] = useState('')
    const activeButton = !!message.trim();

    const messageHandler = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = () => {
        console.log("send...");
        setMessage('');
    }

    return (
        <div className={classes.chat}>
            <div className={classes.chatContain}>
                <span className={classes.selfChat}>hello</span>
                <span className={classes.contactChat}>by by</span>
            </div>
            <div className={classes.inputMessage}>
                <input placeholder='type message' onChange={messageHandler} value={message} />
                <button
                    onClick={sendMessage}
                    disabled={!activeButton}
                    className={activeButton ? classes.active : undefined}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ChatContain;