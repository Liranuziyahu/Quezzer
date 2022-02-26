import React ,{useState,useContext} from 'react'
import {myContextData} from '../../context/ContextDataFromServer'
import axios from 'axios'
import uniqid from 'uniqid';
import TableCerateCandidates from '../Tamplates/TableCerateCandidates';

const CreateCandidates = () => {
    const {setState,state} = useContext(myContextData)
    const [user, setUser] = useState({"id":uniqid(),"email":'',"password":'',
    "name":'',
    "categoria":[],
    "typeClient":'User',
    "Grade":[
        {
            "name": "React",
            "grade": "Dont Start yet"
          },
          {
            "name": "React",
            "grade": "Dont Start yet"
          },
          {
            "name": "React",
            "grade": "Dont Start yet"
          },
    ]
})


    const addUser = (()=>{
        console.log("CreateCandidates");
        setState([...state,user])
        axios.post('http://localhost:3000/Candidates',user)})

    
    const checkCategoria = (check , categoriaType) =>{
    if(check == true)
    {
        return setUser({...user,['categoria']:[...user.categoria,{"name":categoriaType ,"grade":"Not start yet"}]})}
    else
    {
        user.categoria.map((category , index)=>{
            if(category.name == categoriaType)
            {
                console.log(index)
                user.categoria.splice(index,1)
                return setUser({...user,['categoria']:user.categoria})
            }
           
        })
        
    }
}

        
    return (
        <>
       <TableCerateCandidates value={{"addUser":addUser ,"user":user , "setUser":setUser , "checkCategoria":checkCategoria}}/>
        </>
    )
}

export default CreateCandidates
