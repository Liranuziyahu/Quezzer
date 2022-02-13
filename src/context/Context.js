import React,{createContext ,useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";

export const myContext = createContext()

const Context = ({children}) => {
    const [toggleAddButton,settoggleAddButton] = useState(true)
    const [isAuth, setIsAuth] = useState(false)
    let navigate = useNavigate();

    useEffect(async () => {
       
        console.log("isAuth from Context" , isAuth)
    }, [isAuth])

    return (
        <div>
              <myContext.Provider value={{toggleAddButton ,settoggleAddButton,isAuth , setIsAuth}} >
                {children}
            </myContext.Provider>
        </div>
    )
}

export default Context
