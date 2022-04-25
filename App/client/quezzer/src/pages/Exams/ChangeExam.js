import React from 'react'
import Button from '@mui/material/Button';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
const ChangeExam = ({props}) => {
  let nameExam = props?.exam?.name
  return (
      <>
      {
        props.storageQuestions.length != props.theExmControl + 1 ? 
        (
          <>
            <h1>You are Ready for {nameExam} Exam?</h1>
      <Button onClick={() => props.changeExam()} variant="contained" endIcon={<AlarmOnIcon />}>
           I'm ready for that
      </Button>
          </>
        ): <h1>Thank you very much for participating</h1>  
        
      } 
        
      </>
       )
}

export default ChangeExam