import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { myContextData } from '../../context/ContextDataFromServer';
import Exam from './Exam';

const DisassembleByCateegoriy = () => {
  const [exmpale , setExample] = useState([])
useEffect( async () =>{
  let fromLocal = localStorage.getItem('currentUser')  
  let dataUser = JSON.parse(fromLocal) 

  const data = await axios.get(`http://localhost:3000/Exams`);
  const repositoryExmas = Object.entries(data.data[0])

  let theCategoriaUserAsk = []
  dataUser.categoria.map(exm => theCategoriaUserAsk.push(exm.name))


  let theExamsUserAsk =[]
  repositoryExmas.map((allExm)=>
  {
    theCategoriaUserAsk.map((examUserAsk)=>{
      if(allExm[0] == examUserAsk)
      theExamsUserAsk.push(allExm)
    })
  })

  setExample(theExamsUserAsk)
},[])
    
  return (
    <div>

      {
         <Exam question={exmpale} />

      }


    </div>
  );
};

export default DisassembleByCateegoriy;



// let [questionsExams, setQuestionsExams] = useState();

// const userCurrent = JSON.parse(localStorage.getItem('currentUser'));
// useEffect(async () => {
//   const data = await axios.get(`http://localhost:3000/Exams`);
//   let arr = userCurrent.categoria.map((categoriaT) => {  
//     console.log("data",data.data[0])                  
//       let questionCategory = eval(`data.data[0].${categoriaT}`); 
//       let obj = {};
//       let catagoriaName = `${categoriaT}`;
//       obj[catagoriaName] = questionCategory;
//       return obj
//   })
//   setQuestionsExams(arr);