import React , {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'

export const ContextFromServer = createContext()

const ContextServer = ({children}) => {
  const [candadians,setCandadians] = useState({})
  const [exams,setExams] = useState({})


    useEffect(() =>{

      axios.get(`http://localhost:8080/user`)
      .then(data => {setCandadians(data.data)})
      axios.get(`http://localhost:8080/exams`)
      .then(data => {setExams(data.data)})
    },[])



  return (

    <div>
        <ContextFromServer.Provider value={{candadians ,exams}}>
          {children}
        </ContextFromServer.Provider>
        
    </div>
  )
}

export default ContextServer