import React ,{useContext} from 'react'
import {Outlet, Navigate, useNavigate} from 'react-router-dom'
import {myContext} from '../context/Context'
import {myContextData} from '../context/ContextDataFromServer'



const ProtectedUserRoute = () => {
    const {isAuth} = useContext(myContext)
    const { dataUserLogged } = useContext(myContextData)
    const isUser = (isAuth && dataUserLogged?.typeClient =='User') || (JSON.parse(localStorage?.getItem('currentUser')))?.typeClient =='User'
  return (
    isUser ? <Outlet></Outlet>: <Navigate to="/"/>  )
}

export default ProtectedUserRoute