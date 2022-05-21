import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
//Component 
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {myContextData} from '../../context/ContextDataFromServer'
import PageExam from './ExamPage'

function Candidates({exam}) {
    const {setPageExam , pageExam} = useContext(myContextData)

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center" component="th" scope="row">
            {exam?.userID}
            </TableCell>
            <TableCell align="center"> {exam?.userName}</TableCell>
            <TableCell align="center">{exam?.userEmail}</TableCell>
            <TableCell align="center">{exam?.categoryExamsName}</TableCell>
            <TableCell align="center">{exam?.score}</TableCell>
            <TableCell align="center"> <Link to ={`${exam?.examsID}`} >Exam</Link></TableCell>
        </TableRow>
        
)}
export default Candidates
