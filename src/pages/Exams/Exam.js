import React,{useEffect,useState} from 'react'
import ChangeExam from './ChangeExam';
import Question from './Question';


const Exam = ({question}) => {
    let [theExmControl , setTheExmControl] = useState(0);
    let [theQuestionControl , setTheQuestionControl] =useState(0);
    let ExamState = question.slice(theExmControl,theExmControl + 1)
    let amountQuestionExam = ExamState?.[0]?.[1].length
    const ChangeQuestion = () => setTheQuestionControl(theQuestionControl + 1)
    const changeExam = () => {
      setTheExmControl(theExmControl + 1);
      setTheQuestionControl(0);
      return ExamState = question.slice(theExmControl,theExmControl+1);}
  
  return (
   <>
   {
          
          amountQuestionExam > theQuestionControl 
          ?<Question  props = {{ExamState ,theQuestionControl ,ChangeQuestion}}/>
          :<ChangeExam props = {{changeExam , question,theExmControl }}/>
   }
        
   </>
    
  )
}

export default Exam