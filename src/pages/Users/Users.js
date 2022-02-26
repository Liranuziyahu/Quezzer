import React from 'react'
//CSS
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Users = ({user}) => {
  return (
    <>
    
          {
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">{user.id}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
            </TableRow>
          }
     </>
     )
}

export default Users