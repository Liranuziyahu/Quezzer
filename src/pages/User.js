import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import {myContextData} from '../context/ContextDataFromServer'

const User = () => {
  const {dataUserLogged} = useContext(myContextData)
  return (
  <>

    <div>Hello {dataUserLogged.name} </div>
    <div>Welcome to our exams </div>
    <div>Today you will test about {dataUserLogged.categoria.map(type=> type+" ")}.</div>
    <Link to='test'>Start</Link>
  </>
  )
}

export default User