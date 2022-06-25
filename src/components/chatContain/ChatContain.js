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

    // useEffect(() => {
    //     isLoading && dummy.current.scrollIntoView();
    // }, [])

    const sendMessage = () => {
        // dummy.current.scrollIntoView({ behavior: 'smooth' });
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
        getDataChat()
        async function getDataChat() {
            // setIsLoading(true);
            await fetch(`https://react-messenger-7d63b-default-rtdb.firebaseio.com/chats/${props.chatId}.json/`)
                .then((res => res.json()))
                .then(data => {
                    const chatData = [];
                    for (const key in data) {
                        chatData.push({
                            user: data[key].user,
                            message: data[key].message
                        })
                    }
                    setDataChat(chatData.slice(0, -1));
                    // setIsLoading(false);
                    JSON.stringify(dataChat) !== JSON.stringify(chatData.slice(0, -1)) &&
                        dummy.current.scrollIntoView({ behavior: 'smooth' });
                });
        }
    });

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
            </Fragment>}
        </div>
    )
}

export default ChatContain;