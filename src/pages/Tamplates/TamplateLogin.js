import React ,{useContext , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {myContextData} from '../../context/ContextDataFromServer'
import {myContext} from '../../context/Context'
import { useNavigate } from "react-router-dom";

const TamplateLogin = ({settoggleAddButton,toggleAddButton}) => {
    const {state , setDataUserLogged } =  useContext(myContextData)
    const {setIsAuth} = useContext(myContext)
    let navigate = useNavigate();

    const checkAuto = (autoLogin) => {
        autoLogin.preventDefault()
        state.map(async (user)=>{
            if(user.email == autoLogin.target[0].value && user.password == autoLogin.target[1].value)
            {
                 setDataUserLogged(user)
                 setIsAuth(true)
                 navigate(-1)  
            }
        })}
    return (
        <div > 
            <Form style={{"width":"30%","margin":"auto","marginTop":"40px"}} 
                onSubmit ={(e)=>{checkAuto(e)} }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link  to="new" >
                     You dont have account yet?
                </Link>
                
                <Button variant="primary" type="submit"
                    style={{"width":"100px","marginLeft":"calc(50% - 50px)"}}>
                    Login
                </Button>
            
                
            </Form>
        </div>
    )
}

export default TamplateLogin
