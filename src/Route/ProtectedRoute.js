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
      
    }, [isAuth])

    return (
        <>   
           { 
           (isAuth && dataUserLogged?.typeClient =='Admin') || (JSON.parse(localStorage?.getItem('currentUser')))?.typeClient =='Admin' ?
           <Admin/>:
           (isAuth && dataUserLogged?.typeClient =='User') || (JSON.parse(localStorage?.getItem('currentUser')))?.typeClient =='User'?
           <User /> : <Navigate to="/login"/>
           } 
        </>
    )
}

export default ProtectedRoute
