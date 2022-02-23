import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Question = ({props}) => {
  return (
      <>
        <FormControl >
      <FormLabel>{props.ExamState[0]?.[1][props.theQuestionControl]?.question}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue='0'
        name="radio-buttons-group"
      >
           {
             props.ExamState?.[0]?.[1]?.[props.theQuestionControl]?.answers.map((answer,index) => {
                return (
                  <FormControlLabel value={index}  key={index} control={<Radio />} label={answer} />
                )
             })
           } 
      </RadioGroup>
    </FormControl>
    <div><button onClick={() => props.ChangeQuestion() }>Change Question</button></div>      </>
  
  )
}

export default Question