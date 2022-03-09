import React,{useState ,useContext} from 'react'
import ChangeExam from './ChangeExam';
import Question from './Question';
import {myContextData} from '../../context/ContextDataFromServer'


const Exam = ({question}) => {
    const {editUser} = useContext(myContextData)
    let [theExmControl , setTheExmControl] = useState(0);
    let [theQuestionControl , setTheQuestionControl] =useState(0);
    let ExamState = question.slice(theExmControl,theExmControl + 1)
    let amountQuestionExam = ExamState?.[0]?.[1].length
    let fromLocal = localStorage.getItem('currentUser')  
    let dataUser = JSON.parse(fromLocal) 

    const ChangeQuestion = () => setTheQuestionControl(theQuestionControl + 1)

    const changeExam = () => {
      setTheExmControl(theExmControl + 1);
      setTheQuestionControl(0);
      return ExamState = question.slice(theExmControl,theExmControl+1);
    }


    const CheckAnswer = (object) =>{
     
        dataUser.categoria.map((exam , index)=>{
        if(object.type == exam.name )
            if(object.userAnswer == object.TrueAnswer)
               {
                dataUser.categoria[index].grade = dataUser.categoria[index].grade + 10
                editUser(dataUser)
                localStorage.setItem('currentUser' , JSON.stringify(dataUser))
               }
        })
      } 
  
  return (
   <>
   {
          
          amountQuestionExam > theQuestionControl 
          ?<Question  props = {{ExamState ,theQuestionControl ,ChangeQuestion , CheckAnswer}}/>
          :<ChangeExam props = {{changeExam , question,theExmControl }}/>
   }
        
   </>
    
  )
}

export default Exam