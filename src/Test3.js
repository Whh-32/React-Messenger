import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

const Test3 = () => {
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate({
            pathname: location.pathname,
            search: `?exit=true`
        })
    }
    return (
        <div>
            <h3 onClick={clickHandler}>Quot {params.page}</h3>
        </div>
    )
}

export default Test3