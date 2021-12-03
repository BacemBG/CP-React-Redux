import React from 'react'
import EditTask from './EditTask';
import {Button} from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask } from '../JS/Actions/action';


const Task = ({task}) => {
    const dispatch = useDispatch()
    return (
        <div style={{margin:"10px 3rem" ,border:"1px solid blue", padding:"10px" , display:"flex" }} >
           <h2 className={task.isDone ? "done" : null}> {task.text} </h2>
           <Button variant="danger" onClick={()=>dispatch(deleteTask(task.id))}  style={{width:"5rem", height:"3rem", marginLeft:"65%"}} >
            Delete
        </Button>
        <Button variant="warning" className={task.isDone ? "btnDone" : null} onClick={()=>dispatch(doneTask(task.id))}  style={{width:"6rem", height:"3rem", marginLeft:"1rem"}} >
            {task.isDone ? "unDone" : "Done"}
        </Button>    
           <EditTask task={task} />
        </div>
        
    )
}

export default Task