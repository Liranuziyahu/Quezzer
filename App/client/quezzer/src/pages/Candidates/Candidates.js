import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
//Component 
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {ContextFromServer} from '../../context/index'
import FileOpenIcon from '@mui/icons-material/FileOpen';
import EmailIcon from '@mui/icons-material/Email';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import axios from 'axios';

function Candidates({exam}) {
    const {AnswersByExamID} = useContext(ContextFromServer)

    const senderMail = async  (id ) => {
        console.log(id)
        let answers = await AnswersByExamID(id)
        try{
            axios.post('http://localhost:8080/exams/send-exam',{"answers": answers ,"to": exam.userEmail})
        }
        catch(err){ console.error(err)}
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center" component="th" scope="row">
            {exam?.userID}
            </TableCell>
            <TableCell align="center" sx={{maxWidth:10}}> {exam?.userName}</TableCell>
            <TableCell align="center" sx={{maxWidth:10}}>{exam?.userEmail}</TableCell>
            <TableCell align="center" sx={{maxWidth:10}}>{exam?.categoryExamsName}</TableCell>
            <TableCell align="center" sx={{maxWidth:10}}>{exam?.score}</TableCell>
            <TableCell align="center" sx={{maxWidth:10}} >
                 <Link to ={`${exam?.examsID}`}  state={{ data: exam }}><FileOpenIcon color="action"/></Link>
                 {
                    exam?.sent == 0 ? <EmailIcon onClick={() => senderMail(exam.examsID)} color="action"/> : <MarkEmailReadIcon color="action"/>
                 }
            </TableCell>

        </TableRow>
        
)}
export default Candidates
