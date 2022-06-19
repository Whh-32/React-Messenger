import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import classes from './SingUp.module.css'

const SingUp = () => {
    const path = useLocation().pathname;
    const location = path === "/Sing-Up" ? true : false;
    const navigate = useNavigate()

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
            navigate('/')
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
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp;