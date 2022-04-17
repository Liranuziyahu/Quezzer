import React , {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'

export const ContextFromServer = createContext()

const ContextServer = ({children}) => {
  const [candadians,setCandadians] = useState({})

    useEffect(() =>{
      axios.get(`http://localhost:8080/user`)
      .then(data => setCandadians(data.data))
    },[])



  return (

    <div>
        <ContextFromServer.Provider value={{candadians}}>
          {children}
        </ContextFromServer.Provider>
        
    </div>
  )
}

export default ContextServer