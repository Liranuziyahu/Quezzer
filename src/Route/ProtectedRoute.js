import React ,{useContext,useEffect} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {myContext} from '../context/Context'
import {myContextData} from '../context/ContextDataFromServer'
import { Admin } from '../pages'
import User from '../pages/User'

const ProtectedRoute = () => {
    const {isAuth} = useContext(myContext)
    const { dataUserLogged } = useContext(myContextData)

    useEffect(() => {
      console.log("isAuth from protect" , isAuth)
      console.log(dataUserLogged?.typeClient)
    }, [isAuth])

    return (
        <>   
           { 
           (isAuth && dataUserLogged?.typeClient =='Admin') ?
            <Admin />:
           (isAuth && dataUserLogged?.typeClient =='User') ?
           <User /> : <Navigate to="/login"/>
           } 
        </>
    )
}

export default ProtectedRoute
