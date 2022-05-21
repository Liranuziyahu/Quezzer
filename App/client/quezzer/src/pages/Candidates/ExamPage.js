import React,{useEffect , useContext , useState} from 'react'
import { useParams } from "react-router-dom";
import {ContextFromServer} from './../../context'

const ExamPage = () => {
  const params = useParams();
  const {AnswersByExamID ,exams} = useContext(ContextFromServer)
  const [exam, setExam] = useState()
  const [user , setUser] = useState()

  useEffect(async ()=>{
   let answers = await AnswersByExamID(params.id)
   setExam(answers)
  },[exams])


  return (
    <>
      {
      exam?.message ? exam?.message 
      :
     ( 
        exam?.map(answer => (
        <div key={answer.questionID} style={{marginBottom:20}}>
          <div>{answer.questionTheQuestion}</div>
          <div style={answer.questionTrueAnswer == answer.answer1 ? {color:'green'}: (answer.answer1 == answer.userAnswer && answer.userAnswer != answer.questionTrueAnswer )?{color:'red'}:null}>1. {answer.answer1}</div>
          <div style={answer.questionTrueAnswer == answer.answer2 ? {color:'green'}: (answer.answer2 == answer.userAnswer && answer.userAnswer != answer.questionTrueAnswer )?{color:'red'}:null}>2. {answer.answer2}</div>
          <div style={answer.questionTrueAnswer == answer.answer3 ? {color:'green'}: (answer.answer3 == answer.userAnswer && answer.userAnswer != answer.questionTrueAnswer )?{color:'red'}:null}>3. {answer.answer3}</div>
          <div style={answer.questionTrueAnswer == answer.answer4 ? {color:'green'}: (answer.answer4 == answer.userAnswer && answer.userAnswer != answer.questionTrueAnswer )?{color:'red'}:null}>4. {answer.answer4}</div>
        </div>)
      
        ))
    }
    </>
  )
}

export default ExamPage