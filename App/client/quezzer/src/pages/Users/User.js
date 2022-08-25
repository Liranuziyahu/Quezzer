import React,{useEffect , useContext , useState} from 'react'
import axios from 'axios'
import {ContextFromServer} from '../../context'
import AlertDialog from './Actions/AlertDialog'
//CSS
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const User = ({props}) => {
  const {updateContext , setUpdateContext  , DeleteAllExams ,deleteUser} = useContext(ContextFromServer)

  const DeleteUser = async userID => {
    await DeleteAllExams(userID)
    await deleteUser(userID)
    .then(res => setUpdateContext(!updateContext))
  }
  
  return (
    <>
    
          {
            <TableRow
              key={props?.user.userID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{maxWidth:10}} align="center" component="th" scope="row">{props?.user.userID}</TableCell>
              <TableCell sx={{maxWidth:10}} align="center">{props?.user.userEmail}</TableCell>
              <TableCell sx={{maxWidth:10}} align="center">{props?.user.userName}</TableCell>
              <TableCell sx={{maxWidth:10}} align="center">{props?.user.roleName}</TableCell>
              <TableCell sx={{maxWidth:10}} align="center">
                <EditIcon onClick={() => {props.setUserToChange(props.user); return props.setEditCompUser(!props.editUser)}}/>
                <AlertDialog props={{DeleteUser ,"user": props?.user }}/>
              </TableCell>
              
            </TableRow>
          }
     </>
     )
}

export default User  