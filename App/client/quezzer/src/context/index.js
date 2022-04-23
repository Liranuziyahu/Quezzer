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


    const createExam = (exam => axios.post('http://localhost:8080/exams/',exam))

  //Add Question 
  const createQuestion = async (category , question ) =>{
    if(category=='JS')
        question['categoryExamsID'] = '1'
    if(category=='React')
        question['categoryExamsID'] = '2'
    if(category=='Angular')
        question['categoryExamsID'] = '3'
    axios.post('http://localhost:8080/questions',question)
}


//Edit User
const editUser = (user => axios.put(`http://localhost:8080/user/${user.userID}`,user))
//Check category , where User change category for test 
const checkCategoria = (userID ,check , categoriaType) =>{
  let categoryExist = false;
  if(check == true)
  {
    axios.get(`http://localhost:8080/exams`)
    .then(exams => {
        let examsUser = exams.data.filter(exam => exam.userID == userID)
        examsUser.map?.(exam => {
      if(exam.categoryExamsID == categoriaType )
        return categoryExist=true
    })
    if(!categoryExist) createExam({categoryExamsID:categoriaType , userID:userID ,score:0})
    })
  }
  else 
  {
    axios.post(`http://localhost:8080/exams/category/`,{userID:userID, categoryExamsID:categoriaType})
    .then(data => {
      const idExamToDelete = data.data[0][0].examsID
      axios.delete(`http://localhost:8080/exams/${idExamToDelete}`)
    })
    .catch(err =>console.log('Maybe not exist'))
  }
}

  return (

    <div>
        <ContextFromServer.Provider value={{users ,exams , questionsJS , questionsReact , questionsAngular ,editUser , checkCategoria ,createQuestion}}>
          {children}
        </ContextFromServer.Provider>
        
    </div>
  )
}

export default ContextServer