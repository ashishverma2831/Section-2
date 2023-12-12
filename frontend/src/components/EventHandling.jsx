import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling</h1>
        <hr />
        <button className='btn btn-primary' onClick={()=>{alert('button was clicked0')}}>Click Me</button>
        {/* <div id="display-box">Hello React</div> */}

        <h3 className='mt-3'>Change event</h3>
        <input type='text' className='form-control' onChange={(e)=>{console.log(e.target.value)}} />
        {/* <input type='color' onChange={(e)=>{console.log(e.target.value)}}/> */}
        <input type='color' onChange={(e)=>{console.log(); document.body.style.background=e.target.value}}/>

        <input type='file' onChange={(e)=>{console.log(e.target.files[0].name)}} />
    </div>
  )
}

export default EventHandling