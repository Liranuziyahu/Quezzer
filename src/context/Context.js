import React, {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'

export const myContext = createContext()


const Context = ({children}) => {
    const [state,setState] = useState([])
    const [reqAdminNav,setReqAdminNav] = useState('Candidates')
    const reqTableAdmin= (req => {return setReqAdminNav(req)})

    useEffect(async() => {
    const dataArr=[]
    const dataUser = await axios.get(`http://localhost:3000/${reqAdminNav}`)
    dataUser.data.map(data => dataArr.push(data))
    setState(dataArr)
    console.log(reqAdminNav)
    },[reqAdminNav])

    return (
        <>
            <myContext.Provider value={{state,reqTableAdmin}} >
                {children}
            </myContext.Provider>
        </>
    )
}

export default Context
