import React from 'react'
//CSS
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Users = ({user}) => {
  return (
    <>
    
          {
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.id}</TableCell>
            </TableRow>
          }
     </>
     )
}

export default Users