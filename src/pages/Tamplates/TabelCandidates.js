import React,{useContext, useEffect, useState} from 'react'
import {myContextData} from '../../context/ContextDataFromServer'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';
import BtnCreateCandidates from '../Buttons/BtnCreateCandidates';

const TabelCandidates = () => {
    const {state} = useContext(myContextData)
    console.log(state)
    return (
      <>
      <BtnCreateCandidates/>
      <TableContainer component={Paper}>  
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell align="center">User ID</TableCell>
              <TableCell align="center">Type</TableCell>
                <TableCell align="center">User Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Exam</TableCell>
                <TableCell align="center">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state?.map((state) => {return( 

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" component="th" scope="row">
                    {state?.id}
                  </TableCell>
                  <TableCell align="center"> {state?.typeClient}</TableCell>
                  <TableCell align="center"> {state?.name}</TableCell>
                  <TableCell align="center">{state?.email}</TableCell>
                  <TableCell align="center">{state?.categoria==null?null:state?.categoria.map(categoria=>{
                    return  <div>{categoria}</div>
                    })}
                  </TableCell>
                  <TableCell align="center">
                    {/* <div>React:{state?.Grade[0]?.React}</div> */}
                    {/* <div>Angular:{state?.Grade[0]?.Angular}</div>
                    <div>JS:{state?.Grade[0]?.JS}</div> */}
                  </TableCell>
                </TableRow>
              )})}
            </TableBody>
          </Table>
    </TableContainer>
      </>
  
    )
}

export default TabelCandidates
