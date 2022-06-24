import React, { useContext, useEffect, useState } from 'react'

import AuthContext from '../../store/auth-context'
import classes from './ChatContain.module.css'

const ChatContain = (props) => {
    const authCtx = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const [dataChat, setDataChat] = useState([]);
    const activeButton = !!message.trim();

    const messageHandler = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = () => {
        fetch(`https://react-messenger-7d63b-default-rtdb.firebaseio.com/chats/${props.chatId}.json/`, {
            method: 'POST',
            body: JSON.stringify({
                user: authCtx.user,
                message: message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return console.log(res.json())
            }
        })
            .then(data => { })
        setMessage('');
    }

    useEffect(() => {
        const chatData = [];
        fetch(`https://react-messenger-7d63b-default-rtdb.firebaseio.com/chats/${props.chatId}.json/`)
            .then((res => res.json()))
            .then(data => {
                for (const key in data) {
                    chatData.push({
                        user: data[key].user,
                        message: data[key].message
                    })
                }
                setDataChat(chatData.slice(0,-1))
            })
        // let slam = document.getElementById(classes.sende);
        // slam.scrollTop = slam.scrollHeight
    });

    return (
        <div className={classes.chat}>
            <div id={classes.sende} className={classes.chatContain}>
                {
                    dataChat.map((pm, index) => {
                        if (pm.user === authCtx.user) {
                            return <span key={index} className={`${classes.selfChat} ${classes.userChat}`}>{pm.message}</span>
                        } else {
                            return <span key={index} className={`${classes.contactChat} ${classes.userChat}`}>{pm.message}</span>
                        }
                    })
                }
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