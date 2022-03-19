import  React , {useState , useEffect}  from 'react';
import InputAddToCategory from './InputAddToCategory';
import QuestionStructure from './QuestionStructure';


const Repositore = () => {
    const [category, setCategory] = useState('JS');
    const [questionStructure , setquestionStructure ] = useState({
        "question": "",
          "answers": ['option 1','option 2','option 3','option 4'],
          "trueAnswer": ""
    })

    useEffect(() =>{
        
    },[category])
    
    return (
        <>
            <InputAddToCategory setCategory={setCategory}/>
            <QuestionStructure props={{"category":category ,setquestionStructure ,"questionStructure":questionStructure}}/>
        </>
    )
}

export default Repositore

// Repositore = מאגר