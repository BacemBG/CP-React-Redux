import {ADD_TASK ,  DELETE_TASK, DONE_TASK, EDIT_TASK, } from "../Constant/action_type";

export const addTask = (newTask) =>{
    return{
        type:ADD_TASK,
        payload: newTask
    }
};

//EDit Todo
export const editTask = (id,newTask) =>{
    return{
    type:EDIT_TASK,
    payload:{id,newTask}
}}

//delete todo
export const deleteTask = (id)=>{
    return{
        type: DELETE_TASK,
        payload:id
    }
}

// done Todo
export const doneTask = (id)=>{
    return{
        type:DONE_TASK,
        payload:id,
    }
}