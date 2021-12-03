import React,{useState} from 'react'
import {Button, Modal} from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { editTask } from '../JS/Actions/action';

const EditTask = ({task}) => {
  console.log(task)
    const [show, setShow] = useState(false);
    const[newText,setNewText] = useState(task.text)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handleEdit = ()=>{
       dispatch(editTask(task.id,newText)) 
       handleClose()

    }

  
    return (
      <>
        <Button variant="primary" onClick={handleShow} style={{width:"5rem", height:"3rem", marginleft:"1rem"}}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         <input type="text" value={newText} onChange={(e)=>setNewText(e.target.value)} />
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" type='submit' onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>

         
        </Modal>
      </>
    );
  
}

export default EditTask
