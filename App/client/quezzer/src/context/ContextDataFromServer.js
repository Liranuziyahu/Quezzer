import React, {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'
import uniqid from 'uniqid';

export const myContextData = createContext()


const Candidates = ({children}) => {

    //useState
    const [StateUser,setStateUser] = useState([{}])
    const [candadians,setCandadians] = useState({})
    const [dataUserLogged , setDataUserLogged] = useState()
    const [user, setUser] = useState({"id":uniqid(),"email":'',"password":'',
    "name":'',
    "categoria":[],
    "typeClient":'User'
})

    const addUser = (async (user)=>{
        setStateUser([...StateUser,user])
       await axios.post('http://localhost:3000/Candidates',user)

        setUser({"id":uniqid(),"email":'',"password":'',
        "name":'',
        "categoria":[],
        "typeClient":'User'
    })
 
    })


    return (
        <>
            <myContextData.Provider value={{candadians ,StateUser , setDataUserLogged , dataUserLogged  ,addUser ,user,setUser  }} >
                {children}
            </myContextData.Provider>
        </>
    )
}

export default Candidates
