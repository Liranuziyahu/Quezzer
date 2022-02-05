import React, {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'

export const myContextData = createContext()


const Candidates = ({children}) => {
    const [state,setState] = useState([{}])
    const [reqAdminNav,setReqAdminNav] = useState('Candidates')
    const [dataUserLogged , setDataUserLogged] = useState()
    
    const reqTableAdmin= (req => {return setReqAdminNav(req)})

    useEffect(async() => {
    const dataArr=[]
    const dataUser = await axios.get(`http://localhost:3000/${reqAdminNav}`)
    dataUser.data.map(data => dataArr.push(data))
    setState(dataArr)
    },[reqAdminNav])

    return (
        <>
            <myContextData.Provider value={{state,reqTableAdmin,setState , setDataUserLogged , dataUserLogged}} >
                {children}
            </myContextData.Provider>
        </>
    )
}

export default Candidates
