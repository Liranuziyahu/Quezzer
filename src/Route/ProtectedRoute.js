import React ,{useContext,useEffect} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {myContext} from '../context/Context'
import {myContextData} from '../context/ContextDataFromServer'

const ProtectedRoute = () => {
    const {isAuth , setIsAuth} = useContext(myContext)
    const { dataUserLogged } = useContext(myContextData)

    useEffect(() => {
    //  console.log(dataUserLogged.typeClient)
    }, [isAuth])
    return (
        <>
           {isAuth ?
           <Outlet/> : <Navigate to="/login"/>
           } 
        </>
    )
}

export default ProtectedRoute
