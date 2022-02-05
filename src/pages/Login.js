import React ,{useContext , useEffect}from 'react'
import { CreateCandidates } from '.'
import TamplateLogin from './Tamplates/TamplateLogin'
import {myContext} from '../context/Context'


function Login() {
 
    const {settoggleAddButton , toggleAddButton} = useContext(myContext)
    
    useEffect(()=>{ 
    },[])

    return (
        <div>
           {toggleAddButton?
            <TamplateLogin toggleAddButton = {toggleAddButton} 
                           settoggleAddButton={settoggleAddButton}/>
            : <CreateCandidates/>
           } 
        </div>
    )
}

export default Login
