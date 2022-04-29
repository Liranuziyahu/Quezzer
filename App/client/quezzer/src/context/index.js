import React , {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const ContextFromServer = createContext()

const ContextServer = ({children}) => {
  const [allUsers,setAllUsers] = useState({})
  const [exams,setExams] = useState({})
  const [updateContext , setUpdateContext] = useState(false)
  const [questionsJS , setQuestionsJS] = useState([])
  const [questionsReact , setQuestionsReact] = useState([])
  const [questionsAngular , setQuestionsAngular] = useState([])
  const userModle = {"userName":'',"userEmail":'',"userPassword":'',"roleName":'2'}
  const [user, setUser] = useState(userModle)
  const navigate = useNavigate();

  useEffect(async () =>{
    console.log(updateContext)
    await axios.get(`http://localhost:8080/user`).then(data => setAllUsers(data.data))
    await axios.get(`http://localhost:8080/exams`).then(data => setExams(data.data))
    await axios.get(`http://localhost:8080/questions`)
    .then(data => {
      setQuestionsJS(data.data.filter(question => question.categoryExamsName == 'JS'))
      setQuestionsReact(data.data.filter(question => question.categoryExamsName == 'React'))
      setQuestionsAngular(data.data.filter(question => question.categoryExamsName == 'Angular'))
    })
  },[updateContext])

//Question//
  //Create 
  const createQuestion = async (category , question ) =>{
    if(category=='JS')
        question['categoryExamsID'] = '1'
    if(category=='React')
        question['categoryExamsID'] = '2'
    if(category=='Angular')
        question['categoryExamsID'] = '3'
    axios.post('http://localhost:8080/questions',question)
}

//User// 
  //Create
  const addUser = (async (user , categorys)=>{
    await axios.post('http://localhost:8080/user',user)
    .then(res => {
        categorys.map?.(async category => {
            const exam = {"categoryExamsID":category,"userID":res.data.userID}
            await axios.post('http://localhost:8080/exams',exam)
        })})
    .catch(err => console.log(err))
    setUser(userModle)
    setUpdateContext(!updateContext)
    navigate(-1)  
  })
//Edit
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
        axios.delete(`http://localhost:8080/exams/${idExamToDelete}`)})
      .catch(err =>console.log('Maybe not exist'))
    }

  }

//Exams//
  //Create
  const createExam = (exam => axios.post('http://localhost:8080/exams/',exam))
  //Update 
  const editExam = (exam => axios.put(`http://localhost:8080/exams/${exam.examsID}`,exam))

  return (

    <div>
        <ContextFromServer.Provider value={{user , setUser ,addUser,allUsers,setAllUsers ,setUpdateContext,updateContext,exams , questionsJS , questionsReact , questionsAngular ,editUser , checkCategoria ,createQuestion ,editExam}}>
          {children}
        </ContextFromServer.Provider>
        
    </div>
  )
}

export default ContextServer