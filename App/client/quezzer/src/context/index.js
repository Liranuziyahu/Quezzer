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

    const editUser = (user => axios.put(`http://localhost:8080/user/${user.userID}`,user))

    const createExam = (exam => axios.post('http://localhost:8080/exams/',exam))

  
  const checkCategoria = (userID ,check , categoriaType) =>{
    let categoryExist = false;
    if(check == true)
    {
      const examUser = exams.filter(exam => exam.userID == userID)
      examUser.map(exam => {
        if(exam.categoryExamsID == categoriaType )
          return categoryExist=true
      })
      if(!categoryExist)
        createExam({categoryExamsID:categoriaType , userID:userID ,score:0})
    }
    else 
    {
      axios.post(`http://localhost:8080/custom/`,{userID:userID, categoryExamsID:categoriaType})
      .then(data => {
        const idExamToDelete = data.data[0][0].examsID
        axios.delete(`http://localhost:8080/exams/${idExamToDelete}`)
      })
      .catch(err =>console.log('Maybe not exist'))
    }
  }

  return (

    <div>
        <ContextFromServer.Provider value={{users ,exams , questionsJS , questionsReact , questionsAngular ,editUser , checkCategoria}}>
          {children}
        </ContextFromServer.Provider>
        
    </div>
  )
}

export default ContextServer