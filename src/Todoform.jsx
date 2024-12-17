import { useState } from "react";
import PropTypes from "prop-types";
import './index.css';


const Todoform = ({addTodo}) => {

    const[taskname , setTaskName]=useState('')
    const[taskDescription , setTaskDescription]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        if( taskname && taskDescription ){
            addTodo({name:taskname , Description:taskDescription , status:"Not Completed"})
            setTaskName('')
            setTaskDescription('')
        }
    }
    return (<>
    <div className="form d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
            <input type="text" 
             className="todoform p-1"
              placeholder="Task Name"
              value={taskname} 
              onChange={(e)=>setTaskName(e.target.value)} />

            <input type="text" 
             className="todoform p-1"
            placeholder="Task Description" 
            value={taskDescription} 
            onChange={(e)=>setTaskDescription(e.target.value)} />
            <button className=" addbutton btn btn-success" type="submit">Add Todo</button>
        </form>
    </div>
    </>
)}

Todoform.propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

export default Todoform