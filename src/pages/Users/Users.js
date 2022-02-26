import React from 'react'
//CSS
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
const Users = ({props}) => {
  console.log("props" , props)
  return (
    <>
    
          {
            <TableRow
              key={props?.user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">{props?.user.id}</TableCell>
              <TableCell align="center">{props?.user.email}</TableCell>
              <TableCell align="center">{props?.user.name}</TableCell>
              <TableCell align="center">
              <EditIcon onClick={() => {
                 props.setUserToChange(props?.user)
                 props.setEditCompUser(!props?.editUser)
              }}>
              </EditIcon>
              
              </TableCell>

             
            </TableRow>
          }
     </>
     )
}

export default Users  