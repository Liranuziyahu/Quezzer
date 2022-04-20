import React, {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'
import uniqid from 'uniqid';

export const myContextData = createContext()


const Candidates = ({children}) => {

    //useState
    const [StateUser,setStateUser] = useState([{}])
    const [candadians,setCandadians] = useState({})
    const [dataUserLogged , setDataUserLogged] = useState()
    const [user, setUser] = useState({"id":uniqid(),"email":'',"password":'',
    "name":'',
    "categoria":[],
    "typeClient":'User'
})

    const addUser = (async (user)=>{
        console.log("CreateCandidates" ,user);
        setStateUser([...StateUser,user])
       await axios.post('http://localhost:3000/Candidates',user)

        setUser({"id":uniqid(),"email":'',"password":'',
        "name":'',
        "categoria":[],
        "typeClient":'User'
    })
 
    })



    const checkCategoria = (userID ,check , categoriaType) =>{
        console.log("userID",userID ,check ,categoriaType)
        if(check == true)
        {   
            return setUser({...user,['categoria']:[...user.categoria,{"name":categoriaType ,"grade":0}]})}
        else
        {
            user.categoria.map((category , index)=>{
                if(category.name == categoriaType)
                {
                    console.log(index)
                    user.categoria.splice(index,1)
                    return setUser({...user,['categoria']:user.categoria})
                }
    })}}

    const createQuestion = async (category , question ) =>{
        console.log(category)
        if(category=='JS')
            question['categoryExamsID'] = '1'
        if(category=='React')
            question['categoryExamsID'] = '2'
        if(category=='Angular')
            question['categoryExamsID'] = '3'

        axios.post('http://localhost:8080/questions',question)
    }



    return (
        <>
            <myContextData.Provider value={{candadians ,StateUser , setDataUserLogged , dataUserLogged , checkCategoria ,addUser ,user,setUser  ,createQuestion}} >
                {children}
            </myContextData.Provider>
        </>
    )
}

export default Candidates
