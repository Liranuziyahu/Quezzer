import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import {myContextData} from '../../context/ContextDataFromServer'

const User = () => {
  const {dataUserLogged} = useContext(myContextData)
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  return (
  <>

    <div>Hello {currentUser.userName? currentUser.userName :dataUserLogged.userName} </div>
    <div>Welcome to our exams </div>
    <Link to='Questionnaire'>Start</Link>
  </>
  )
}

export default User