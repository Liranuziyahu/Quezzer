import React ,{useContext,useEffect} from 'react'
import {Outlet, Navigate, useNavigate} from 'react-router-dom'
import {myContext} from '../context/Context'
import {myContextData} from '../context/ContextDataFromServer'
import { Admin } from '../pages'
import User from '../pages/User'

const ProtectedRoute = () => {
    const {isAuth} = useContext(myContext)
    const { dataUserLogged } = useContext(myContextData)
    let navigate = useNavigate();

    useEffect(() => {
  
 

    }, [isAuth])

    return (
        <>   
           { 
           (isAuth && dataUserLogged?.typeClient =='Admin') || (JSON.parse(localStorage?.getItem('currentUser')))?.typeClient =='Admin' ?
           <Outlet></Outlet>:
           (isAuth && dataUserLogged?.typeClient =='User') || (JSON.parse(localStorage?.getItem('currentUser')))?.typeClient =='User'?
           <Outlet></Outlet>: <Navigate to="/login"/>
           } 
        </>
    )
}

export default ProtectedRoute
