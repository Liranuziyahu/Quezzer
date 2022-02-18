import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { myContextData } from '../../context/ContextDataFromServer';

const Exams = () => {
  const userCurrent = JSON.parse(localStorage.getItem('currentUser'));

useEffect( async () =>{
  const data = await axios.get(`http://localhost:3000/Exams`);
  let arr = {} 
  userCurrent.categoria.map(categoriaT => 
   {  
    let obj={}
    let catagoriaName = categoriaT
     obj[catagoriaName] = eval(`data.data[0].${categoriaT}`)
    return {...arr ,obj}
   }
    )
    console.log("arr",arr)
    console.log("data",data.data)

},[])
    
  return (
    <>
      {/* {console.log('questionsExams',questionsExams)} */}
    </>
  );
};

export default Exams;



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