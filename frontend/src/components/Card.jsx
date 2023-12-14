import React, { useState } from 'react'

const Card = () => {

    const [likes, setLikes] = useState(0);
    const [comment, setComment] = useState(0);

  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className="card" style={{width: '18rem'}}>
            <div>
                <div>
                    <h5 className='p-2 pb-0 my-0'>Ashish Verma</h5>
                    <p className='px-2 '>Mern Developer</p>
                </div>
            </div>
            <img className="card-img-top" src="https://media.licdn.com/dms/image/D4D22AQFAFSOg6Mfd1g/feedshare-shrink_800/0/1702556930285?e=1705536000&v=beta&t=R5SykTglGDC9F9IAkYKazH27i0ZvDieVIn1MhC5g3u4" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Animal</h5>
                <p className="card-text">The magic you are looking for is in the work you are avoiding.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                    <h5>{likes} likes </h5>
                    <button className='btn btn-danger' onClick={()=>{setLikes(likes+1)}}><i className="fa-solid fa-thumbs-up"></i></button>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <h5>{comment} comments </h5>
                    <button className='btn btn-danger' onClick={()=>{setComment(comment+1)}}><i class="fa-solid fa-comment"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card