import React,{useContext} from 'react'
import { FormControl } from '@mui/material';
import { Form,Col,Row,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import {myContextData} from '../../../context/ContextDataFromServer'
import BackPage from '../../Buttons/BackPage';

const CreateCandidates = () => {
    const {addUser,checkCategoria ,user ,setUser} = useContext(myContextData)
    const navigate = useNavigate();

    return (
        <div style={{"width":"80%","marginLeft":"20%","marginTop":"40px"}}>
             <FormControl  style={{"width":"50%", "marginLeft":"10%"}} onSubmit = {(e)=> {
                addUser(user)
                e.preventDefault();
                navigate(-1)
                }} >
            <Form >
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onChange = {((e)=>setUser({...user,['email']:e.target.value}))} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onChange = {((e)=>setUser({...user,['password']:e.target.value}))} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                    Full Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onChange = {((e)=>setUser({...user,['name']:e.target.value}))} type="text" placeholder="Full name" />
                    </Col>
                </Form.Group>

               
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        Categoria
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="checkbox"
                        label="React"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onClick = {((e)=>{checkCategoria(e.target.checked,'React')})}
                        />
                        <Form.Check
                        type="checkbox"
                        label="Angular"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onClick ={((e)=>{checkCategoria(e.target.checked,'Angular')})}
                        />
                        <Form.Check
                        type="checkbox"
                        label="JS"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        onClick = {((e)=>{checkCategoria(e.target.checked,'JS')})}
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

export default CreateCandidates
