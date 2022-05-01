import React from 'react'
import Button from '@mui/material/Button';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
const ChangeExam = ({props}) => {
  console.log(props)
  let nameExam = props?.storageQuestions?.[props.theExmControl+1]?.name
  const styleCenter ={
    width:700,
    position:'absolute',
    top:'35%',left:'calc(50% - 350px)'
  }
  return (
      <>
      {
        props.storageQuestions.length != props.theExmControl + 1 ? 
        (
          <>
            <div style = {styleCenter}>
              <h1 style={{textAlign: 'center'}}>You are Ready for <span style={{color:'#1663be',fontWeight:'700'}}>{nameExam} </span>  Exam?</h1>
              <Button style={{width:'100%'}} onClick={() => props.changeExam()} variant="contained" endIcon={<AlarmOnIcon />}>
                  I'm ready for that
              </Button>
            </div>
          </>
        ): <h1 style={styleCenter}>Thank you very much for participating</h1>  
        
      } 
        
      </>
       )
}

export default ChangeExam