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
    const reqTableAdmin= (req => {return setReqAdminNav(req)})

    const addUser = ((user)=>{
        console.log("CreateCandidates");
        setStateUser([...StateUser,user])
        axios.post('http://localhost:3000/Candidates',user)})

    const editUser = ((user)=>{
        console.log("edituser" , user);
        axios.patch(`http://localhost:3000/Candidates/${user.id}`,user)

    })

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
                   
            })}}

    useEffect(async() => {
        const dataArr=[]
        const dataUser = await axios.get(`http://localhost:3000/${reqAdminNav}`)
        dataUser.data.map(data => dataArr.push(data))
        setStateUser(dataArr)
    },[reqAdminNav])

    return (
        <>
            <myContextData.Provider value={{StateUser,reqTableAdmin , setDataUserLogged , dataUserLogged , checkCategoria ,addUser ,user,setUser ,editUser}} >
                {children}
            </myContextData.Provider>
        </>
    )
}

export default Candidates
