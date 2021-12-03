import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../JS/Actions/action'

function AddTask() {
  const [text, setText] = useState("")
  const dispatch = useDispatch()
  const handleChange = (e)=>{
     e.preventDefault();
     if(text.trim()){
       dispatch(addTask({id:Math.random(), text:text, isDone:false}));
       setText('')
     }else{
       alert("can't add an empty task")
     }
  }
  
    return (
        <div>
            <Form onSubmit={handleChange} >


  <Form.Group  className="mb-3" width="500px" style={{margin:"30px 30%"}}>
    <Form.Label >AddTask</Form.Label>
    <div style={{display:"flex"}}>
    <Form.Control style={{width:"80%"}} type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add Task ..." />
  

  <Button variant="primary" type="submit" onClick={handleChange} >
    Submit
  </Button>
  </div>
</Form.Group>

        </Form>
        </div>

    )
}

export default AddTask
