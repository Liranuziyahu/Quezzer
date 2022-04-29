import React,{useContext , useState} from 'react'
import { FormControl } from '@mui/material';
import { Form,Col,Row,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {myContextData} from '../../../context/ContextDataFromServer'
import {ContextFromServer} from '../../../context'
import BackPage from '../../Buttons/BackPage';

const CreateUser = () => {
    const {addUser ,user ,setUser} = useContext(ContextFromServer)
    const [categoryExam , setCategoryExam] = useState([])

    const checkCategoria = (boolen , type) =>{
        if(boolen)
        {
            let catboolen = false
            categoryExam.map?.(exam =>{if(exam == type) return catboolen == true})
            if(!catboolen) setCategoryExam(categoryExam => [...categoryExam ,type])
        }
        else{
            categoryExam.splice(type)
        }
    }
    return (
        <div style={{"width":"80%","marginLeft":"20%","marginTop":"40px"}}>
             <FormControl  style={{"width":"50%", "marginLeft":"10%"}} onSubmit = {(e)=> {
                addUser(user , categoryExam)
                e.preventDefault();
                
                }} >
            <Form >
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onChange = {((e)=>setUser({...user,['userEmail']:e.target.value}))} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onChange = {((e)=>setUser({...user,['userPassword']:e.target.value}))} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                    Full Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onChange = {((e)=>setUser({...user,['userName']:e.target.value}))} type="text" placeholder="Full name" />
                    </Col>
                </Form.Group>

               
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        Category
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="checkbox"
                        label="React"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onClick = {((e)=>{checkCategoria(e.target.checked,'2')})}
                        />
                        <Form.Check
                        type="checkbox"
                        label="Angular"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onClick ={((e)=>{checkCategoria(e.target.checked,'3')})}
                        />
                        <Form.Check
                        type="checkbox"
                        label="JS"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        onClick = {((e)=>{checkCategoria(e.target.checked,'1')})}
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
               
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" >Sign in</Button>
                    <BackPage/>
                    </Col>
                </Form.Group>
            </Form>
        </FormControl>
        </div>
    )
}

export default CreateUser
