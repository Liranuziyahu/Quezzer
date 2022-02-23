import React from 'react'

const ChangeExam = ({props}) => {
  let nameExam = props?.question[props?.theExmControl + 1]?.[0]
  return (
      <>
      {
        nameExam ? 
        (
          <>
            <h1>You are Ready for {nameExam} Exam?</h1>
            <button onClick={() => props.changeExam() }>Finish</button>
          </>
        ): <h1>Thank you very much for participating</h1>
          
        
          
        
      } 
        
      </>
       )
}

export default ChangeExam