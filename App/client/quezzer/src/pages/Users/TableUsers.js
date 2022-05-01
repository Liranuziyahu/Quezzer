import React , {useContext , useEffect} from 'react'
import axios from 'axios'
//Component
import User from './User'
import {ContextFromServer} from '../../context/'
//MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableUsers = ({props}) => {
    const {allUsers} = useContext(ContextFromServer)

  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">User Name</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Tools</TableCell>
          </TableRow>  
     
        </TableHead>
        <TableBody>
          {
            props.userSearch.search ?  
              (
                allUsers.map((user)=>{
                  let entryCategory = eval(`user.${props.userSearch.catagorey}`).toString().toLowerCase()
                  if(entryCategory.includes(props.userSearch.search))
                    return <User props = {{"user":user , "setEditCompUser":props.setEditCompUser ,
                            "editUser":props.editUser ,"setUserToChange":props.setUserToChange}}/>
              }))
            :
          allUsers.map?.((user) => <User props={{"user": user , "setEditCompUser":props.setEditCompUser 
                                  ,"editUser":props.editUser ,"setUserToChange":props.setUserToChange}}/>)
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableUsers