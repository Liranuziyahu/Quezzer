import React from 'react'
import {useParams} from 'react-router'


const CndByID = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>Cnd by ID :</h1>
            {JSON.stringify(params.cid)}
        </div>
    )
}

export default CndByID
