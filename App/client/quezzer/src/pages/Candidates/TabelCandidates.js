import React,{useContext, useState} from 'react'
import { useEffect } from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';

const TabelCandidates = () => {
    const {candadians} = useContext(ContextFromServer)
    const [userSearch ,setUserSearch] = useState({search:"" , catagorei:""})

    useEffect(()=>{
      console.log(candadians)
    },[userSearch])
    
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
                     candadians.map?.((candidate)=>{
                     let entryString = eval(`candidate.userID`)
                     let currentSearchString = userSearch.search
                     if(entryString.startsWith?.(currentSearchString))
                        return <Candidates candidate = {candidate}/>
                    })
                   ):
                   candadians.map?.(candidate => <Candidates candidate = {candidate}/>)
                
                }
            </TableBody>
          </Table>
    </TableContainer>
      </>
  
    )
}

export default TabelCandidates
