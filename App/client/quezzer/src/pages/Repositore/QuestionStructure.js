import React, { useState,useContext } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { Form } from 'react-bootstrap';
import {myContextData} from '../../context/ContextDataFromServer'

const QuestionStructure = ({props}) => {

    const {createQuestion} = useContext(myContextData)

    const handleClick = (answerTyped , index) => {
     
      props.setquestionStructure(()=>{
        let answers = props.questionStructure.answers
        answers[index] = answerTyped
       return{
        ...props.questionStructure ,
        answers:answers 
       }
      })
        };

  return (
    <>
    <FormControl style={{display: 'flex'}} onSubmit ={(e)=>{
        e.preventDefault()
        props.setquestionStructure({"question":e.target[0].value,"trueAnswer":e.target[6].value})
        createQuestion(props.category , props.questionStructure)
        }}>
     <Form >
            <TextField fullWidth label="Question" id="Question" placeholder="typeing..." onChange={(e)=>props.setquestionStructure({...props.questionStructure,['question']:e.target.value})}/>
            <div style={{display: 'flex',marginTop:20,justifyContent:'space-between'}}>
                    <TextField
                    id="standard-textarea"
                    label="Answer 1"
                    placeholder="typeing..."
                    variant="standard"
                    onChange={(e)=> { handleClick(e.target.value , 0)}}
                    />

                    <TextField
                    id="standard-textarea"
                    label="Answer 2"
                    placeholder="typeing..."
                    variant="standard"
                    onChange={(e)=> { handleClick(e.target.value , 1)}}

                    />

                    <TextField
                    id="standard-textarea"
                    label="Answer 3"
                    placeholder="typeing..."
                    variant="standard"
                    onChange={(e)=> { handleClick(e.target.value , 2)}}

                    />

                    <TextField
                    id="standard-textarea"
                    label="Answer 4"
                    placeholder="typeing..."
                    variant="standard"
                    onChange={(e)=> { handleClick(e.target.value , 3)}}

                    />

                    <TextField
                    id="standard-textarea"
                    label="True Answer"
                    placeholder="typeing..."
                    variant="standard"
                    onChange={(e)=>props.setquestionStructure({...props.questionStructure,['trueAnswer']:e.target.value})}
                    />
            </div>
            <Button type="submit" style={{marginTop:50}}> Create a Question </Button>
        </Form >
    </FormControl>

    </>
  )
}

export default QuestionStructure