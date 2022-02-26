import React ,{useContext, useEffect, useState} from 'react'
import {myContextData} from '../../context/ContextDataFromServer'
import InputSearch from '../Buttons/InputSearch'
import Users from './Users'
//CSS
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BtnCreateCandidates from '../Buttons/BtnCreateCandidates';

const TableUsers = () => {
    const {state} = useContext(myContextData)
    const [userSearch ,setUserSearch] = useState({search:"" , catagorei:""})

    useEffect(()=>{
    },[userSearch])
  return (
    <>
     <BtnCreateCandidates />
     <InputSearch setUserSearch = {setUserSearch}></InputSearch>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">User Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            userSearch.search ?  
            (state.map((candidate)=>{
                if(eval(`candidate.${userSearch.catagorei}`) == userSearch.search)
                    return <Users user = {candidate}/>
                }))
            : state.map((user) => <Users user={user}/>)
          }
        </TableBody>
      </Table>
      </TableContainer>
    </>
     )
}

export default TableUsers