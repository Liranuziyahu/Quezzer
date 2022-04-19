import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { myContextData } from '../../context/ContextDataFromServer';
import {ContextFromServer} from '../../context/index'
import Exam from './Exam';

const DisassembleByCateegoriy = () => {
  const [exmpale , setExample] = useState([])
  const {questionsJS , questionsReact , questionsAngular} = useContext(ContextFromServer)

useEffect( async () =>{
  let fromLocal = localStorage.getItem('currentUser')  
  let dataUser = JSON.parse(fromLocal) 

  console.log(dataUser)

},[questionsJS])

  return (
    <div>

      {
         <Exam question={exmpale} />

      }


    </div>
  );
};

export default DisassembleByCateegoriy;



  // let fromLocal = localStorage.getItem('currentUser')  
  // let dataUser = JSON.parse(fromLocal) 

  // // const data = await axios.get(`http://localhost:3000/Exams`);
  // // const repositoryExmas = Object.entries(data.data[0])
  // // console.log(repositoryExmas)

  // let theCategoriaUserAsk = []
  // dataUser.categoria.map(exm => theCategoriaUserAsk.push(exm.name))


  // let theExamsUserAsk =[]
  // repositoryExmas.map((allExm)=>
  // {
  //   theCategoriaUserAsk.map((examUserAsk)=>{
  //     if(allExm[0] == examUserAsk)
  //     theExamsUserAsk.push(allExm)
  //   })
  // })

  // setExample(theExamsUserAsk)
