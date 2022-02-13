import React ,{useState,useContext} from 'react'
import {myContextData} from '../../context/ContextDataFromServer'
import axios from 'axios'
import uniqid from 'uniqid';
import TableCerateCandidates from '../Tamplates/TableCerateCandidates';

const CreateCandidates = () => {
    const {setState,state} = useContext(myContextData)
    const [user, setUser] = useState({"id":uniqid(),"email":'',"password":'',"name":'',"categoria":[],"typeClient":'User',"Grade":[{
        "React": "Not start yet",
        "JS": "Not start yet",
        "Angular": "Not start yet"
      }]})
    const addUser = (()=>{
        console.log(user);
        setState([...state,user])
        axios.post('http://localhost:3000/Candidates',user)
    })
    
    const checkCategoria = (check , categoriaType) =>{
    if(check == true)
    {
        return setUser({...user,['categoria']:[...user.categoria,categoriaType]})
    }
    else
    {
        const indexCategoria = user.categoria.indexOf(categoriaType)
        user.categoria.splice(indexCategoria,1)
        return setUser({...user,['categoria']:user.categoria})
    }}

    return (
        <>
       <TableCerateCandidates value={{"addUser":addUser ,"user":user , "setUser":setUser , "checkCategoria":checkCategoria}}/>
        </>
    )
}

export default CreateCandidates
