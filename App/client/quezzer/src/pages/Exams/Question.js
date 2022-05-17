import React , {useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Form } from 'react-bootstrap';


const Question = ({props}) => {
  const styleP = {
    fontSize: '400px',
    color:'red'
  }

  function RepeatAnswer(i){
      return <FormControlLabel value={eval(`props.question?.answer${i}`)} 
      key={i} control={<Radio required={true} />} label={eval(`props.question?.answer${i}`)}/>
  }

  const CheckTheRadio = (event) =>{
    for(let i=0; i<=3;i++)
    {
      if(event[i].checked)
        return event[i].value
    }
  }

  const CheckAnswer = (question , userAnswer ) =>{
    if(question.questionTrueAnswer == userAnswer)
        props.exam.score = props.exam.score + 10
  }
  
  return (
    <div style={{margin:'180px 10px'}}>
    <FormControl onSubmit = {(e) => {
        e.preventDefault();
        let userAnswer = CheckTheRadio(e?.target)
        CheckAnswer(props.question , userAnswer)
        props.setStorageAnswers(storageAnswers => [...storageAnswers , {examsID:props.userExams?.examsID,questionID:props.question.questionID,userAnswer: userAnswer}])
        return props.ChangeQuestion()
        }}>

        <Form>
          <FormLabel>{props.question?.questionTheQuestion}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue='0'
            name="radio-buttons-group"
          >
          {
           [1,2,3,4].map(i => RepeatAnswer(i))
          }

          </RadioGroup>
          <Button type="submit" style={{margin:25}} variant="outlined" startIcon={<SendIcon  />}>Send</Button>
        </Form>
    </FormControl>
  </div>
  
  )
}

export default Question
