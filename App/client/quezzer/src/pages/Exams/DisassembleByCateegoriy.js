import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { myContextData } from '../../context/ContextDataFromServer';
import {ContextFromServer} from '../../context/index'
import Exam from './Exam';

const DisassembleByCateegoriy = () => {
  const {dataUserLogged } =  useContext(myContextData)
  const [userExams , setUserExams] = useState([])
  let dataUser = JSON.parse(localStorage.getItem('currentUser')) 
  let currentUserTest = dataUserLogged ? dataUserLogged : dataUser


  const [storageQuestion , setStorageQuestion] = useState([])

  useEffect(async()=>{
    await axios.get(`http://localhost:8080/exams`)
      .then(exams =>{
        return exams.data.map?.(exam =>{ if(exam.userID == currentUserTest?.userID)  return exam }) })
        
      .then(exams => {
        exams.map((exam) =>{ if(exam != undefined) setUserExams(userExams => [...userExams,exam]) }) })
  },[])


  return (
    <div> {<Exam userExams={userExams} />} </div>
  );
};

export default DisassembleByCateegoriy;
