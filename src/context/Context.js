import React,{createContext ,useState} from 'react'

export const myContext = createContext()

const Context = ({children}) => {
    const [toggleAddButton,settoggleAddButton] = useState(true)
    const [isAuth, setIsAuth] = useState(true)

    return (
        <div>
              <myContext.Provider value={{toggleAddButton ,settoggleAddButton,isAuth , setIsAuth}} >
                {children}
            </myContext.Provider>
        </div>
    )
}

export default Context
