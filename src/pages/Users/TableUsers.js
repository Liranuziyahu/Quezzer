import React ,{useContext, useEffect, useState} from 'react'
import InputSearch from '../Buttons/InputSearch'
//CSS

import BtnCreateCandidates from '../Buttons/BtnCreateCandidates';
import ChangeUserData from './ChangeUserData';
import TampletUsers from './TampletUsers';

const TableUsers = () => {
    const [userSearch ,setUserSearch] = useState({search:"" , catagorei:""})
    const [editUser , setEditCompUser ] =useState(false)
    const [userToChange , setUserToChange] = useState('')

    useEffect(()=>{
    },[userSearch])
  return (
    <>
     <BtnCreateCandidates />
     <InputSearch setUserSearch = {setUserSearch}></InputSearch>

    { 
      editUser
      ?
      <ChangeUserData props={{"setEditUser":setEditCompUser,"userToChange":userToChange}} /> 
      : 
      <TampletUsers props={{"userSearch":userSearch , "setEditCompUser":setEditCompUser 
      , "editUser":editUser , setUserToChange}} />
     }
    </>
     )
}

export default TableUsers