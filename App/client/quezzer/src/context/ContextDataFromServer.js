import React, {useState , useEffect} from 'react'
import {createContext} from 'react'
import axios from 'axios'
import uniqid from 'uniqid';

export const myContextData = createContext()


const Candidates = ({children}) => {

    //useState
    const [StateUser,setStateUser] = useState([{}])
    const [reqAdminNav,setReqAdminNav] = useState('Candidates')
    const [dataUserLogged , setDataUserLogged] = useState()
    const [user, setUser] = useState({"id":uniqid(),"email":'',"password":'',
    "name":'',
    "categoria":[],
    "typeClient":'User'
})
 
    //Function
    const reqTableAdmin= (req => {
        
        return setReqAdminNav(req)
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

    const editUser = ((user)=>{
        console.log("edituser" , user);
        axios.patch(`http://localhost:3000/Candidates/${user.id}`,user)
    })

    const checkCategoria = (check , categoriaType) =>{
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
        await axios.get(`http://localhost:3000/Exams`)
       .then(  oldExams => {

        console.log("old",oldExams.data[0])
         oldExams.data[0][category].push(question)
        axios.post(`http://localhost:3000/Exams`,oldExams.data[0])
        console.log("new",oldExams.data[0])
        
        // async function postData(url = 'http://localhost:3000/Exams', data = oldExams.data[0]) {
        //     const response = await fetch(url, {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify(data)
        //     })
        //     return response.json()
        //   }
        //   postData();
       })

        .catch(err => console.log("err" , err))
    }

    useEffect(async() => {
        const dataArr=[]
        const dataUser = await axios.get(`http://localhost:3000/${reqAdminNav}`)
        dataUser.data.map(data => dataArr.push(data))
        setStateUser(dataArr)
    },[reqAdminNav])

    return (
        <>
            <myContextData.Provider value={{StateUser,reqTableAdmin , setDataUserLogged , dataUserLogged , checkCategoria ,addUser ,user,setUser ,editUser ,createQuestion}} >
                {children}
            </myContextData.Provider>
        </>
    )
}

export default Candidates
