import React from 'react'
//CSS
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
const User = ({props}) => {
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
              </TableCell>
            </TableRow>
          }
     </>
     )
}

export default User  