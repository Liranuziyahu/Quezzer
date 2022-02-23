import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { myContextData } from '../../context/ContextDataFromServer';
import Exam from './Exam';

const DisassembleByCateegoriy = () => {
  const userCurrent = JSON.parse(localStorage.getItem('currentUser'));
  const [exmpale , setExample] = useState([])
useEffect( async () =>{
  const data = await axios.get(`http://localhost:3000/Exams`);
  const cata = Object.entries(data.data[0])
  setExample(cata)

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