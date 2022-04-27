import React, {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'
import uniqid from 'uniqid';

export const myContextData = createContext()


const Candidates = ({children}) => {

    const userModle = {"userName":'',"userEmail":'',"userPassword":'',"roleName":'2'}
    //useState
    const [candadians,setCandadians] = useState({})
    const [dataUserLogged , setDataUserLogged] = useState()
    const [user, setUser] = useState(userModle)

    const addUser = (async (user , categorys)=>{
        await axios.post('http://localhost:8080/user',user)
        .then(res => {
            categorys.map?.(async category => {
                const exam = {"categoryExamsID":category,"userID":res.data.userID}
                await axios.post('http://localhost:8080/exams',exam)
            })})
        .catch(err => console.log(err))
        setUser(userModle)
    })


    return (
        <>
            <myContextData.Provider value={{candadians , setDataUserLogged , dataUserLogged  ,addUser ,user,setUser  }} >
                {children}
            </myContextData.Provider>
        </>
    )
}

export default Candidates
