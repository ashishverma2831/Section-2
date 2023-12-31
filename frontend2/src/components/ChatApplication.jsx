import React, { useState } from 'react'

const ChatApplication = () => {

    const [chatlist, setChatlist] = useState([])
    const addNewChat = (e)=>{
        if(e.code==='Enter'){
            setChatlist([e.target.value,...chatlist].reverse())
            e.target.value="";
        }
    }

  return (
    <div className='container'>
    <h2>Chat Application</h2>
    <hr />
    <div className='card'>
        <div className='card-body'>
            <ul className='list-group'>
            {chatlist.map((chat)=>{
                return <li className='list-group-item d-flex justify-content-between'>
                    <p>{chat}</p>
                </li>
            })}
            </ul>
        </div> 
        <div className='card-header'>
            <input type='text' placeholder='enter your task to add' className='form-control' onKeyDown={addNewChat} />
        </div> 
    </div>
</div>
  )
}

export default ChatApplication