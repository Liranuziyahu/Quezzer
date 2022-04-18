import  React , {useState , useContext}  from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { Form } from 'react-bootstrap';
import {myContextData} from '../../context/ContextDataFromServer'
import InputAddToCategory from './InputAddToCategory';

const Repositore = () => {
    const [questionStructure , setquestionStructure ] = useState({
        "categoryExamsID":'',
        "questionTheQuestion": "",
        "questionTrueAnswer": "",
        "answer1": "" ,
        "answer2": "" ,
        "answer3": "" ,
        "answer4": "" ,
    })
    const [category, setCategory] = useState('JS');

    const {createQuestion} = useContext(myContextData)


    return (
        <>
            <InputAddToCategory props={{setCategory ,category}}/>
            <FormControl style={{display: 'flex'}} onSubmit ={(e)=>{
                e.preventDefault()
                createQuestion(category , questionStructure)
                }}>
            <Form >
                    <TextField fullWidth label="Question" id="Question" placeholder="typeing..." onChange={(e)=>setquestionStructure({...questionStructure,['questionTheQuestion']:e.target.value})}/>
                    <div style={{display: 'flex',marginTop:20,justifyContent:'space-between'}}>
                        <TextField
                        id="standard-textarea"
                        label="Answer 1"
                        placeholder="typeing..."
                        variant="standard"
                        onChange={(e)=>setquestionStructure({...questionStructure,['answer1']:e.target.value})}/>

                        <TextField
                        id="standard-textarea"
                        label="Answer 2"
                        placeholder="typeing..."
                        variant="standard"
                        onChange={(e)=>setquestionStructure({...questionStructure,['answer2']:e.target.value})}/>

                        <TextField
                        id="standard-textarea"
                        label="Answer 3"
                        placeholder="typeing..."
                        variant="standard"
                        onChange={(e)=>setquestionStructure({...questionStructure,['answer3']:e.target.value})}/>

                        <TextField
                        id="standard-textarea"
                        label="Answer 4"
                        placeholder="typeing..."
                        variant="standard"
                        onChange={(e)=>setquestionStructure({...questionStructure,['answer4']:e.target.value})}/>

                        <TextField
                        id="standard-textarea"
                        label="True Answer"
                        placeholder="typeing..."
                        variant="standard"
                        onChange={(e)=>setquestionStructure({...questionStructure,['questionTrueAnswer']:e.target.value})}/>
                    </div>
                    <Button type="submit" style={{marginTop:50}}> Create a Question </Button>
                </Form >
            </FormControl>
        </>
    )
}
export default Repositore
    
