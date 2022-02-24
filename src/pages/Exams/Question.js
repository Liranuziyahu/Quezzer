import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

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
    <div>
    <Button onClick={() => props.ChangeQuestion() } style={{margin:25}}variant="outlined" startIcon={<SendIcon  />}>
      Send
    </Button>
    </div>
 
 </>
  
  )
}

export default Question