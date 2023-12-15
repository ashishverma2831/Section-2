import React, { useState } from 'react'

const Todo = () => {

    const [todolist, setTodolist] = useState([]);

    const addNewTask = (e)=>{
        // console.log(e.code);
        if(e.code==='Enter'){
            console.log(e.target.value);
            setTodolist([e.target.value,...todolist]);
            console.log([e.target.value,...todolist]);

            e.target.value="";
        }
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
                {todolist.map((task)=>{return <li className='list-group-item d-flex justify-content-between'>
                    <p>{task}</p>
                    <div>
                        <button className='btn btn-primary'>Complete</button>
                        <button className='btn btn-danger ms-2'>Delete</button>
                    </div>
                </li>})}
                </ul>
            </div> 
        </div>
    </div>
  )
}

export default Todo