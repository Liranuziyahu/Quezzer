import React,{useContext} from 'react'
import {useParams} from 'react-router'
import {myContextData} from '../../context/ContextDataFromServer'

const CandidatesByID =  () => {
    const params = useParams()
    const {setState,state} = useContext(myContextData)
    console.log(state)
    return (
        <div>
            <h1>Cnd by ID :</h1>
            {JSON.stringify(params.cid)}
        </div>
    )
}

export default CandidatesByID
