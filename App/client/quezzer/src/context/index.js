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

  const [categoryExam , setCategoryExam] = useState([])

  const checkCategory = (boolen , type) =>{
    if(boolen)
    {
        let catboolen = false
        categoryExam.map?.(exam =>{if(exam == type) return catboolen == true})
        if(!catboolen) setCategoryExam(categoryExam => [...categoryExam ,type])
    }
    else{
       let sliceArr = categoryExam.filter(exam => exam != type)
       setCategoryExam(sliceArr)
    }
}

  const navigate = useNavigate();

  useEffect(async () =>{
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
    console.log("user" , user)
    console.log("categorys" , categorys)
    
    await axios.post('http://localhost:8080/user',user)
    .then(res => {axios.post('http://localhost:8080/exams',{userID:res.data.userID, categorys:categorys})})
    .catch(err => console.log(err))
    setUser(userModle)
    setCategoryExam([])
    setUpdateContext(!updateContext)
    navigate(-1)  
  })
//Edit
  const editUser = (user => axios.put(`http://localhost:8080/user/${user.userID}`,user))

  //Exams//
  //Create
  const createExam = (async exam => await axios.post('http://localhost:8080/exams/',exam))

  //Update specific exam - for change score
  const editExam = (async exam => await axios.put(`http://localhost:8080/exams/${exam.examsID}`,exam))

  //Update Exams User ask to test
  const updateExams = ( async (exam , categorys) => {
      await axios.delete(`http://localhost:8080/exams/deleteAll/${exam.userID}`)
      .then(async res => {
          console.log("HERE")
        await axios.post('http://localhost:8080/exams/',{userID:exam.userID, categorys:categorys})
      })
      .then(() => setUpdateContext(!updateContext))    //Update Context for new data's DB
      setCategoryExam([])
  }) 

  return (

    <div>
        <ContextFromServer.Provider value={{user , setUser ,addUser,allUsers,setAllUsers ,setUpdateContext,updateContext,exams , questionsJS , questionsReact , questionsAngular ,editUser ,createQuestion ,editExam , createExam , updateExams , checkCategory , categoryExam}}>
          {children}
        </ContextFromServer.Provider>
        
    </div>
  )
}

export default ContextServer