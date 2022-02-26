import React ,{useContext} from 'react'
import { Form,Col,Row } from 'react-bootstrap';
import {myContextData} from '../../context/ContextDataFromServer'
const ChangeUserData = ({props}) => {
  const {checkCategoria} = useContext(myContextData)
  return (

    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Change Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"onClick={()=>props.setEditUser(false)}></button>
        </div>
        <div class="modal-body">
        
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={props.userToChange.email}/>
                      <Form.Label>Password address</Form.Label>
                      <Form.Control type="password" placeholder="Enter password"value={props.userToChange.password} />
                      <Form.Group as={Row} className="mb-3" style={{marginTop:25}}>
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


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>props.setEditUser(false)}>Close</button>
          <button type="button" class="btn btn-primary" onClick={()=>{props.setEditCompUser(false)}}>Save changes</button>
        </div>
      </div>  
    </div>
  )
}

export default ChangeUserData