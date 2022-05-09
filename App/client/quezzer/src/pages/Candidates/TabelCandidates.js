import React,{useContext, useState} from 'react'
//Component
import {ContextFromServer} from '../../context/'
import Candidates from './Candidates'
//MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputSearch from '../Buttons/InputSearch';

const TabelCandidates = () => {
    const {exams} = useContext(ContextFromServer)
    const [userSearch ,setUserSearch] = useState({search:"" , catagorey:""})

    exams?.sort?.((exam1 , exam2)=>{
      return exam1.userID - exam2.userID
    })
    return (
      <>
        <InputSearch setUserSearch = {setUserSearch}></InputSearch>
        <TableContainer component={Paper}>  
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell align="center">User ID</TableCell>
                <TableCell align="center">User Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Exam</TableCell>
                <TableCell align="center">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                userSearch.search?
                  (
                    exams.map?.((exam)=>{
                    let entryCategory = eval(`exam.${userSearch?.catagorey}`)?.toString()?.toLowerCase()
                    if(entryCategory?.includes?.(userSearch.search?.toString()?.toLowerCase()))
                        return <Candidates exam = {exam}/>
                    })
                  ):
                  exams.map?.(exam => <Candidates exam = {exam}/>)
                }
            </TableBody>
          </Table>
      </TableContainer>
    </>
  )
}
export default TabelCandidates
