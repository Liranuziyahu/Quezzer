import React,{useState ,useContext ,useEffect} from 'react'
import ChangeExam from './ChangeExam';
import Question from './Question';
import {myContextData} from '../../context/ContextDataFromServer'
import {ContextFromServer} from '../../context/index'


const Exam = ({userExam}) => {
  const {questionsJS , questionsReact , questionsAngular } = useContext(ContextFromServer)

    // const {editUser} = useContext(myContextData)
    // let [theExmControl , setTheExmControl] = useState(0);
    // let [theQuestionControl , setTheQuestionControl] = useState(0);
    // let ExamState = question.slice(theExmControl,theExmControl + 1)
    // let amountQuestionExam = ExamState?.[0]?.[1].length
    // let fromLocal = localStorage.getItem('currentUser')  
    // let dataUser = JSON.parse(fromLocal) 
    // const ChangeQuestion = () => setTheQuestionControl(theQuestionControl + 1)

    // const changeExam = () => {
    //   setTheExmControl(theExmControl + 1);
    //   setTheQuestionControl(0);
    //   return ExamState = question.slice(theExmControl,theExmControl+1);
    // }


    // const CheckAnswer = (object) =>{
     
    //     dataUser.categoria.map((exam , index)=>{
    //     if(object.type == exam.name )
    //         if(object.userAnswer == object.TrueAnswer)
    //            {
    //             dataUser.categoria[index].grade = dataUser.categoria[index].grade + 10
    //             editUser(dataUser)
    //             localStorage.setItem('currentUser' , JSON.stringify(dataUser))
    //            }
    //     })
    //   } 

    useEffect(()=>{
      userExam.map(exm=>{
        console.log(exm.categoryExamsName)
        if(exm.categoryExamsName == 'JS')
          console.log("questionsJS", questionsJS)
        if(exm.categoryExamsName == 'React')
          console.log("questionsReact", questionsReact)
        else
          console.log("questionsAngular", questionsAngular)

      })

      // userExam.map?.((exam)=>{
      //   if(exam.categoryExamsName =='JS')
      // })
    },[userExam])
  return (
   <>
   {
          
          // amountQuestionExam > theQuestionControl || 0 == theQuestionControl
          // ? (
          //   <Question  props = {{ExamState ,theQuestionControl ,ChangeQuestion , CheckAnswer}}/>
          // )
         
          // :<ChangeExam props = {{changeExam , question,theExmControl }}/>
          console.log("userExam1",userExam)
   }
        
   </>
    
  )
}

export default Exam