import React , {useContext, useEffect, useState} from 'react'
import User from './User'
import {myContextData} from '../../context/ContextDataFromServer'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableUsers = ({props}) => {
    const {StateUser} = useContext(myContextData)
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">User Name</TableCell>
            <TableCell align="center">Tools</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.userSearch.search ?  
              (
               StateUser.map((user)=>{
               let entryString = eval(`user.${props.userSearch?.catagorei}`).toLowerCase() 
               let currentSearchString = props.userSearch.search.toLowerCase() 
               if(entryString.startsWith(currentSearchString))
                  return <User props = {{"user":user , "setEditCompUser":props.setEditCompUser ,"editUser":props.editUser ,"setUserToChange":props.setUserToChange}}/>
              }))
            : 
            StateUser.map((user) => <User props={{"user": user , "setEditCompUser":props.setEditCompUser ,"editUser":props.editUser ,"setUserToChange":props.setUserToChange}}/>)
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableUsers