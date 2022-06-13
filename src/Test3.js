import React from 'react'
import { useParams } from 'react-router-dom'

const Test3 = () => {
    const params = useParams()
    return (
        <div>
            <h3>Quot {params.page}</h3>
        </div>
    )
}

export default Test3