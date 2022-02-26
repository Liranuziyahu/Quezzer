import React , {useContext, useEffect, useState} from 'react'
import Users from './Users'
import {myContextData} from '../../context/ContextDataFromServer'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TampletUsers = ({props}) => {
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
            (StateUser.map((user)=>{
                if(eval(`user.${props.userSearch.catagorei}`) == props.userSearch.search)
                    return <Users props = {{"user":user}}/>
                }))
            : StateUser.map((user) => <Users props={{"user": user , "setEditCompUser":props.setEditCompUser ,"editUser":props.editUser ,"setUserToChange":props.setUserToChange}}/>)
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TampletUsers