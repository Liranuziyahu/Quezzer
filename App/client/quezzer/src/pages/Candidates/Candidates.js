import React from 'react'
//Component 
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function Candidates({exam}) {
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center" component="th" scope="row">
            {exam?.userID}
            </TableCell>
            <TableCell align="center"> {exam?.userName}</TableCell>
            <TableCell align="center">{exam?.userEmail}</TableCell>
            <TableCell align="center">{exam?.categoryExamsName}</TableCell>
            <TableCell align="center">{exam?.score}</TableCell>
        </TableRow>
)}
export default Candidates
