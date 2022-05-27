import React,{useEffect,useState , useContext} from 'react'
import axios from 'axios'
import Diagram from './Diagram'

const DiagramDishboard = () => {
const [examJS , setExamJS] = useState([])     
const [examRact , setExamRact] = useState([])
const [examAngular , setExamAngular] = useState([])

    useEffect(async () => {
        await axios.get(`http://localhost:8080/exams`)
        .then(data => {
            // console.log(data.data)
            let x = data.data.filter(exam => exam.categoryExamsName == 'JS')
            setExamJS(x)
            let y = data.data.filter(exam => exam.categoryExamsName =='React')
            setExamRact(y)
            let z = data.data.filter(exam => exam.categoryExamsName == 'Angular')
            setExamAngular(z)
        })
       },[])
  return (
      <div style={{marginTop:30}}>
        <div style={{width:'30vw',height:'28vh',float:'right'}}>
            <Diagram props={{name:'JS',value:examJS,type:'Line'}}/>
            <Diagram props={{name:'React',value:examRact,type:'Line'}}/>
            <Diagram props={{name:'Angular',value:examAngular,type:'Line'}}/>
        </div>
        <div style={{width:'35vw',height:'28vh',marginLeft:40}}>
            <Diagram props={{name:'Angular',value:examAngular,type:'Circle',exams:[examJS , examRact , examAngular]}}/>
        </div>
      </div>

  )
}

export default DiagramDishboard