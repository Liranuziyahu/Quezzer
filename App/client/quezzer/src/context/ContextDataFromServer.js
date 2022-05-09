import React, {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'
import uniqid from 'uniqid';

export const myContextData = createContext()


const Candidates = ({children}) => {

    //useState
    const [candadians,setCandadians] = useState({})
    const [dataUserLogged , setDataUserLogged] = useState()
    const [toggleAddButton,settoggleAddButton] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    

    return (
        <>
        <myContextData.Provider value={{candadians , setDataUserLogged , dataUserLogged , toggleAddButton ,settoggleAddButton,isAuth , setIsAuth}} >
        {children}
        </myContextData.Provider>
        </>
    )
}

export default Candidates
