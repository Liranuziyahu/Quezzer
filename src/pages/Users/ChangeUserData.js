import React ,{useContext} from 'react'
import { Form,Col,Row } from 'react-bootstrap';
import {myContextData} from '../../context/ContextDataFromServer'
import { FormControl } from '@mui/material';

const ChangeUserData = ({props}) => {
  const {checkCategoria , editUser ,user ,setUser} = useContext(myContextData)
  setUser(props.userToChange)
  return (
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Change Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"onClick={()=>props.setEditCompUser(false)}></button>
        </div>
        <div class="modal-body">

        
          <FormControl onSubmit={(e)=>{
            e.preventDefault();
            setUser({...props.userToChange ,'email':e.target[0].value ,'password':e.target[1].value})
            editUser({...user ,'email':e.target[0].value , 'password':e.target[1].value})   
            }}
            > 
            <Form>  
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={props.userToChange.email}/>
              <Form.Label>Password address</Form.Label>

              <Form.Control type="password" placeholder="Enter password"
               />

              <Form.Group as={Row} className="mb-3" style={{marginTop:25}}>
                <Form.Label as="legend" column sm={2} >
                    Categoria
                </Form.Label>
                  <Col sm={10} style={{marginLeft:25}}>
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
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <button type="submit" class="btn btn-primary" >Save changes</button>

                    </Col>
                </Form.Group>
            </Form>
          </FormControl> 
         
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>props.setEditCompUser(false)}>Close</button>
        </div>
      </div>  
    </div>
  )
}

export default ChangeUserData