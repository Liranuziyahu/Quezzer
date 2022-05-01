import React,{useEffect , useContext , useState} from 'react'
import axios from 'axios'
import {ContextFromServer} from '../../context'

//CSS
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const User = ({props}) => {
  const {updateContext , setUpdateContext} = useContext(ContextFromServer)

  const DeleteUser = async userID => {
    await axios.delete(`http://localhost:8080/exams/deleteAll/${userID}`)
    await axios.delete(`http://localhost:8080/user/${userID}`)
    .then(res => setUpdateContext(!updateContext))
  }
  
  return (
    <>
    
          {
            <TableRow
              key={props?.user.userID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">{props?.user.userID}</TableCell>
              <TableCell align="center">{props?.user.userEmail}</TableCell>
              <TableCell align="center">{props?.user.userName}</TableCell>
              <TableCell align="center">{props?.user.roleName}</TableCell>
              <TableCell align="center">
                <EditIcon onClick={() => {
                    props.setUserToChange(props.user);
                  return props.setEditCompUser(!props.editUser)
                }}>
                </EditIcon>
                <DeleteIcon onClick = {()=>DeleteUser(props?.user.userID)}/>
              </TableCell>
            </TableRow>
          }
     </>
     )
}

export default User  