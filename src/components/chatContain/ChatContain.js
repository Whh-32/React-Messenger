import React, { useContext, useEffect, useState, useRef, Fragment } from 'react'

import AuthContext from '../../store/auth-context'
import classes from './ChatContain.module.css'

const ChatContain = (props) => {
    const dummy = useRef()
    const authCtx = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const activeButton = !!message.trim();
    const [dataChat, setDataChat] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

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
        const interval = setInterval(() => {
            const getDataChat = async () => {
                const response = await fetch(`https://react-messenger-7d63b-default-rtdb.firebaseio.com/chats/${props.chatId}.json/`)
                const data = await response.json()
                const chatData = [];
                for (const key in data) {
                    chatData.push({
                        user: data[key].user,
                        message: data[key].message
                    })
                }
                return chatData.slice(0, -1)
            }

            getDataChat().then(data => {
                setDataChat(prev => {
                    if (data.length === 0) {
                        setTimeout(() => { autoScroll("first") }, 0)
                        return data
                    } else if (data.length !== prev.length) {
                        setTimeout(() => { autoScroll("open") }, 0)
                        return data
                    } else {
                        return prev
                    }
                });

                const autoScroll = (state) => {
                    if (state === "first") {
                        dummy.current.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        dummy.current.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            })
            getDataChat()
        }, 500);
        return () => clearInterval(interval);
    }, [dataChat, props.chatId]);

    return (
        <div className={classes.chat}>
            {<Fragment>
                <div id={classes.sende} className={classes.chatContain}>
                    {dataChat.map((pm, index) => {
                        if (pm.user === authCtx.user) {
                            return <span dir='auto' key={index} className={`${classes.selfChat} ${classes.userChat}`}>{pm.message}</span>
                        } else {
                            return <span dir='auto' key={index} className={`${classes.contactChat} ${classes.userChat}`}>{pm.message}</span>
                        }
                    })}
                    <div ref={dummy}></div>
                </div>
                <div className={classes.inputMessage}>
                    <input dir='auto' placeholder='type message' onChange={messageHandler} value={message} />
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
            </Fragment>}
        </div>
    )
}

export default ChatContain;