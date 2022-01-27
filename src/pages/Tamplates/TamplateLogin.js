import React ,{useContext , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {myContextData} from '../../context/ContextDataFromServer'
import {myContext} from '../../context/Context'

const TamplateLogin = ({settoggleAddButton,toggleAddButton}) => {
    const {state} =  useContext(myContextData)
    const {isAuth , setIsAuth} = useContext(myContext)

    const checkAuto = (e) => {
        e.preventDefault()
        state.map((user)=>{
            if(user.email == e.target[0].value && user.password == e.target[1].value)
            {
                setIsAuth(!isAuth)
                console.log(isAuth)
            }
        })

    }

    return (
        <div > 
            <Form style={{"width":"30%","margin":"auto","marginTop":"40px"}} onSubmit ={(e)=>{checkAuto(e)} }>
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
                
                <Link  to="new" onClick ={(e) =>{
                        if(toggleAddButton==true)
                    return settoggleAddButton(!toggleAddButton)

                ;}}> You dont have account yet?
                </Link>

                <Button variant="primary" type="submit"style={{"width":"100px","marginLeft":"calc(50% - 50px)"}}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default TamplateLogin
