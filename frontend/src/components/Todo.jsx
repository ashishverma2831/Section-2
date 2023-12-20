import React, { useState } from 'react'

const Todo = () => {

    const [todolist, setTodolist] = useState([]);

    const addNewTask = (e)=>{
        // console.log(e.code);
        if(e.code==='Enter'){
            // console.log(e.target.value);
            setTodolist([{text: e.target.value, completed:false}, ...todolist]);
            console.log([{text:e.target.value,completed:false},...todolist]);
            // console.log([e.target.value,...todolist]);

            e.target.value="";
        }
    }

    const deleteTodo = (index)=>{
        console.log(index);
        const temp = todolist;
        temp.splice(index,1);
        setTodolist(temp);
    }

    const completeTodo = (index)=>{
        const temp = todolist;
        temp[index].completed=!temp[index].completed;
        setTodolist([...temp]);
        console.log(temp);
    }

   

  return (
    <div className='container'>
        <h2>To Do List</h2>
        <hr />
        <div className='card'>
            <div className='card-header'>
                <input type='text' placeholder='enter your task to add' className='form-control' onKeyDown={addNewTask} />
            </div> 
            <div className='card-body'>
                <ul className='list-group'>
                {todolist.map((task,index)=>{return <li className='list-group-item d-flex border border-primary justify-content-between align-items-center'>
                    <p>{task.text}</p>
                    {task.completed?
                    (<span className='badge text-bg-success'>completed</span>):(
                        <span className='badge text-bg-warning'>pending</span>
                    )}
                    <div>
                        <button className='btn btn-primary' onClick={()=>{completeTodo(index)}}>Complete</button>
                        <button className='btn btn-danger ms-2' onClick={()=>{deleteTodo(index)}}>Delete</button>
                    </div>
                </li>})}
                </ul>
            </div> 
        </div>
    </div>
  )
}

export default Todo