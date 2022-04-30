import React ,{useContext, useEffect, useState} from 'react'
import InputSearch from '../Buttons/InputSearch'
//CSS

import BtnCreateCandidates from '../Buttons/BtnCreateCandidates';
import ChangeUserData from './Actions/ChangeUserData';
import TableUsers from './TableUsers';
import {myContextData} from '../../context/ContextDataFromServer'

const UserPage = () => {
    const {user} = useContext(myContextData)
    const [userSearch ,setUserSearch] = useState({search:"" , category:""})
    const [editUser , setEditCompUser ] =useState(false)
    const [userToChange , setUserToChange] = useState(user)

    useEffect(()=>{
    },[userSearch])
  return (
    <>
     <BtnCreateCandidates />
     <InputSearch setUserSearch = {setUserSearch}></InputSearch>
    { 
      editUser
      ?
      <ChangeUserData props={{"setEditCompUser":setEditCompUser,"userToChange":userToChange ,"setUserToChange":setUserToChange}} /> 
      : 
      <TableUsers props={{"userSearch":userSearch , "setEditCompUser":setEditCompUser , "editUser":editUser , setUserToChange}} />
    }
    </>
     )
}

export default UserPage