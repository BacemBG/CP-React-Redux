import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {Button} from "react-bootstrap"
import Task from './Task';


const ListTask = () => {
    const listTask = useSelector((state)=> state.task.listTasks);
    const [status, setStatus] = useState("all");
    return(
        <div>
             <Button variant="primary"onClick={()=>setStatus("all")} >
          All
        </Button>
        <Button variant="primary" onClick={()=>setStatus("done")} >
          Done
        </Button>
        <Button variant="primary" onClick={()=>setStatus("undone")}>
          UnDone
        </Button>
           {status ==="done" ? listTask.filter((el)=>el.isDone === true)
           .map((el)=> < Task task={el} key={el.id}/>):
           status ==="undone" ? listTask.filter((el)=>el.isDone === false)
           .map((el)=> < Task task={el} key={el.id}/>):
           listTask.map((el)=> < Task task={el} key={el.id}/>)
           }
        </div>
    )
}
export default ListTask