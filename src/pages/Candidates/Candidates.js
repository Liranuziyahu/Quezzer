import React from 'react'
//Component 
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function Candidates({candidate}) {
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center" component="th" scope="row">
            {candidate?.id}
            </TableCell>
            <TableCell align="center"> {candidate?.typeClient}</TableCell>
            <TableCell align="center"> {candidate?.name}</TableCell>
            <TableCell align="center">{candidate?.email}</TableCell>
            <TableCell align="center">{candidate?.categoria==null?null:candidate?.categoria.map(categoria=>{
                {
                    return  <div>{categoria.name}</div>
                }
            })}
            </TableCell>
            <TableCell align="center">

            {candidate?.categoria==null?null:candidate?.categoria.map(categoria=>{
                {
                    return  <div>{categoria.grade}</div>
                }
            })}
            </TableCell>
        </TableRow>
)}

export default Candidates
