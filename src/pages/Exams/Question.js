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
  const CheckTheRadio = (event) =>{
    for(let i=0; i<=3;i++)
    {
      if(event[i].checked)
        return event[i].value
    }
  }

  return (
    <>
      <FormControl onSubmit = {(e) => {
        e.preventDefault();
        let userAnswer = CheckTheRadio(e?.target)
        console.log("userAnswer" , userAnswer)
        props.CheckAnswer({"userAnswer":userAnswer ,"numberQuestion": props.theQuestionControl ,"TrueAnswer":props.ExamState?.[0]?.[1]?.[props.theQuestionControl].trueAnswer,"type":props.ExamState?.[0][0]});
        return props.ChangeQuestion()
        }}>

        <Form>
          <FormLabel>{props.ExamState[0]?.[1][props.theQuestionControl]?.question}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue='0'
            name="radio-buttons-group"
          >
            {
              props.ExamState?.[0]?.[1]?.[props.theQuestionControl]?.answers.map((answer,index) => {
                  return (
                    <FormControlLabel value={answer}  key={index}  control={<Radio required={true} />} label={answer} />
                  )
              })
            } 
          </RadioGroup>
          <Button type="submit" style={{margin:25}} variant="outlined" startIcon={<SendIcon  />}>Send</Button>
        </Form>
    </FormControl>
  </>
  
  )
}

export default Question