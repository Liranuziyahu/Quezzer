import React,{useEffect,useState} from 'react'

const Question = ({question}) => {
    let [theExmControl , setTheExmControl] = useState(0);
    let [theQuestionControl , setTheQuestionControl] =useState(0);
    let ExamState = question.slice(theExmControl,theExmControl + 1)
    const changeExam = () => {setTheExmControl(theExmControl + 1);setTheQuestionControl(0); return ExamState = question.slice(theExmControl,theExmControl+1);}
    const ChangeQuestion = () =>{setTheQuestionControl(theQuestionControl + 1);console.log(ExamState[0][1][theQuestionControl])}
    const countExmas = question.length;

     useEffect(()=>{

     },[theExmControl])
  return (
   <>
          
            <div>{ExamState[0]?.[1][theQuestionControl]?.question}</div>
            {console.log(ExamState[0]?.[1][theQuestionControl])}
           {
             (ExamState[0]?.[1][theQuestionControl]?.answers.map(answer => {
                return (
                  <div>{answer?answer:null}</div>

                )
             }))
           }
    
          <button onClick={() => ChangeQuestion() }>Change Question</button>
          <button onClick={() => changeExam() }>Finish</button> 
   </>
    
  )
}

export default Question