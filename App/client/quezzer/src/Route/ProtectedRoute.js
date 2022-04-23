import React , {useContext,useEffect} from 'react'
import {Outlet, Navigate, useNavigate} from 'react-router-dom'
import {myContext} from '../context/Context'
import {myContextData} from '../context/ContextDataFromServer'

const ProtectedRoute = () => {
    const {isAuth} = useContext(myContext)
    const { dataUserLogged } = useContext(myContextData)
    const isAdmin = (isAuth && dataUserLogged?.roleName =='Administrator') || (JSON.parse(localStorage?.getItem('currentUser')))?.roleName =='Administrator' 

    useEffect(() => {

    }, [isAuth])

    return (
        <>   
           { 
           isAdmin?
           <Outlet></Outlet>:<Navigate to="User"/>
           } 
        </>
    )
}

export default ProtectedRoute
