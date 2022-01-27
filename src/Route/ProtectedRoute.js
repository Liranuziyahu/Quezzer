import React ,{useContext,useEffect} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {myContext} from '../context/Context'

const ProtectedRoute = () => {
    const {isAuth , setIsAuth} = useContext(myContext)

    useEffect(() => {
     console.log(isAuth)
    }, [isAuth])
    return (
        <>
           {isAuth ?<Outlet/> : <Navigate to="/login"/>} 
        </>
    )
}

export default ProtectedRoute
