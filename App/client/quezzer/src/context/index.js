import React , {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'

export const ContextFromServer = createContext()

const ContextServer = ({children}) => {
  const [users,setUsers] = useState({})
  const [exams,setExams] = useState({})

  const [questionsJS , setQuestionsJS] = useState([])
  const [questionsReact , setQuestionsReact] = useState([])
  const [questionsAngular , setQuestionsAngular] = useState([])

    useEffect(async () =>{
      await axios.get(`http://localhost:8080/user`)
      .then(data => setUsers(data.data))

      await axios.get(`http://localhost:8080/exams`)
      .then(data => setExams(data.data))

      await axios.get(`http://localhost:8080/questions`)
      .then(data => {
        setQuestionsJS(data.data.filter(question => question.categoryExamsName == 'JS'))
        setQuestionsReact(data.data.filter(question => question.categoryExamsName == 'React'))
        setQuestionsAngular(data.data.filter(question => question.categoryExamsName == 'Angular'))
      })
    },[])

  return (

    <div>
        <ContextFromServer.Provider value={{users ,exams , questionsJS , questionsReact , questionsAngular}}>
          {children}
        </ContextFromServer.Provider>
        
    </div>
  )
}

export default ContextServer