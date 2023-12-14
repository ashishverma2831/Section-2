import React, { useState } from 'react'

const StateManagement = () => {

    let count = 10;
    // const [count, setCount] = React.useState(10);
    // useEffect is a built-in Hook that allows you to specify side effects in your components. It’s the equivalent of componentDid
    // useEffect is a built-in Hook that allows you to specify what your component should do when the state changes.
    // useEffect is a special function provided by react that allows you to run some code based on the state changes.

    const [likes, setLikes] = useState(0);
    const [comment, setComment] = useState(0)
    const [imgUrl, setImgUrl] = useState("")
 
    const chooseFile = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (content)=>{
            setImgUrl(content.target.result);
        };
        reader.readAsDataURL(file);
    }

  return (
    <div>
        <div className='container'>
            <h1>Count:{count}</h1>
            <button className='btn btn-primary mt-4' onClick={()=>{count++;console.log(count)}}>Add Count</button>
        
            <button className='btn btn-primary mt-4' onClick={()=>{setLikes(likes+1)}}>Add Likes:{likes}</button>

            <button className='btn btn-primary mt-4' onClick={()=>{setComment(comment+1)}}>Add comment:{comment}</button>

            <input type='text' className='form-control mt-4' placeholder='enter image url' onChange={(e)=>{setImgUrl(e.target.value)}} />
            {/* <p>{imgUrl}</p> */}
            <input type='file' onChange={chooseFile} />
            <img src={imgUrl} alt="photo" width={500} />
        </div>
    </div>
  )
}

export default StateManagement