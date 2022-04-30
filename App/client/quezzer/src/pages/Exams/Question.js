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

  function RepeatAnswer(i){
      return <FormControlLabel value={eval(`props.question?.answer${i}`)} 
      key={i} control={<Radio required={true} />} label={eval(`props.question?.answer${i}`)} />
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
    <>
      <FormControl onSubmit = {(e) => {
        e.preventDefault();
        let userAnswer = CheckTheRadio(e?.target)
        CheckAnswer(props.question , userAnswer)
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
  </>
  
  )
}

export default Question
