import React, { useState, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './SingUp.module.css'

const SingUp = () => {
    const path = useLocation().pathname;
    const location = path === "/Sing-Up" ? true : false;
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [enteredEmail, setEntredEmail] = useState('');
    const [enteredPassword, setEntredPassword] = useState('');
    const [passIsValid, setPassIsValid] = useState(true);
    const [emaiIsValid, setEmailIsValid] = useState(true);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const emailValidation = () => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail)) {
            setEmailIsValid(true);
        } else {
            setEmailIsValid(false);
        }
    }
    const passwordValidation = () => {
        if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(enteredPassword)) {
            setPassIsValid(true);
        } else {
            setPassIsValid(false);
        }
    }

    const emailHandler = (event) => {
        setEntredEmail(event.target.value);
    }
    const passwordHandler = (event) => {
        setEntredPassword(event.target.value);
    }

    const emailFocusHandler = () => {
        setEmailFocus(true)
    }
    const passFocusHandler = () => {
        setPassFocus(true)
    }

    const chengeLocation = () => {
        setEntredEmail('');
        setEntredPassword('');
        setEmailFocus(false);
        setPassFocus(false);
        setEmailIsValid(true);
        setPassIsValid(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (emaiIsValid && passIsValid && emailFocus && passFocus) {
            let url;
            if (location) {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKvwvCNsT785nHFeX0i4HL9S_gjnG_uts'
            } else {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKvwvCNsT785nHFeX0i4HL9S_gjnG_uts'
            }
            setLoading(true);
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return res.json().then((data) => {
                        throw new Error(data.error.message);
                    })
                }
            })
            .then(data => {
                setLoading(false);
                authCtx.login(data.idToken, data.localId)
                if (location) {
                    fetch('https://react-messenger-7d63b-default-rtdb.firebaseio.com/contact.json', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user: data.localId,
                            name: enteredEmail,
                            photo: 'https://icons-for-free.com/download-icon-avatar+human+people+profile+user+icon-1320168139431219590_512.png',
                            description: 'about me...',
                        })
                    }).then(Response => {
                        // console.log(Response) //ok
                    })
                } 
                navigate('/')
            })
            .catch(err => {
                setLoading(false);
                alert(err.message)
            })

        } else {
            emailValidation()
            passwordValidation()
        }
    }
    return (
        <div className={classes.singUp}>
            <div className={classes.contain}>
                <div className={classes.box}>
                    <span className={classes.title}>{location ? 'Sing Up' : 'Login'}</span>
                    <form onSubmit={submitHandler}>
                        <div className={classes.input}>
                            <label className={emaiIsValid ? '' : classes.validate}>Email</label>
                            <input
                                className={emaiIsValid ? '' : classes.validate}
                                onBlur={emailValidation}
                                onFocus={emailFocusHandler}
                                onChange={emailHandler}
                                type='email'
                                placeholder='Email'
                                value={enteredEmail}
                            />
                        </div>
                        <div className={classes.input}>
                            <label className={passIsValid ? '' : classes.validate}>Password</label>
                            <input
                                className={passIsValid ? '' : classes.validate}
                                onBlur={passwordValidation}
                                onFocus={passFocusHandler}
                                onChange={passwordHandler}
                                type='password'
                                placeholder='Password'
                                value={enteredPassword}
                            />
                        </div>
                        <span>
                            {location ? 'Already have an account? ' : 'Already have not an account? '}
                            <Link onClick={chengeLocation} to={location ? '/Login' : '/Sing-Up'}>
                                {location ? 'Login' : 'Sing Up'}
                            </Link>
                        </span>
                        {!loading ? <button>Submit</button> : <span className={classes.loading}></span>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp;