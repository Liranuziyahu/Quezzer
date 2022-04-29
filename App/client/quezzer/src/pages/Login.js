import React ,{useContext , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {myContextData} from '../context/ContextDataFromServer'
import {ContextFromServer} from '../context/'

import {myContext} from '../context/Context'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {StateUser , setDataUserLogged } =  useContext(myContextData)
    const {allUsers} =  useContext(ContextFromServer)
    const {setIsAuth} = useContext(myContext)
    let navigate = useNavigate();

    const checkAuto = (autoLogin) => {
        autoLogin.preventDefault()
        allUsers.map(async (user)=>{
            if(user.userEmail == autoLogin.target[0].value && user.userPassword == autoLogin.target[1].value)
            {
                 setDataUserLogged(user)
                 setIsAuth(true)
                 navigate(`${user.roleName}`)
                 localStorage.setItem('currentUser' , JSON.stringify(user))  
            }})}

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

export default Login
