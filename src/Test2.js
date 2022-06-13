import React from 'react'
import { Link } from 'react-router-dom';

const Test2 = () => {
    return (
        <div>
            <h1>list Quots</h1>
            <ul>
                <li><Link to="/Quots/book" >book</Link></li>
                <li><Link to="/Quots/pc" >pc</Link></li>
                <li><Link to="/Quots/box" >box</Link></li>
            </ul>
        </div>
    )
}

export default Test2;