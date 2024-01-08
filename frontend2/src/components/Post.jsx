import { useFormik } from 'formik'
import React from 'react'
import { enqueueSnackbar } from 'notistack';

const Post = () => {

    const postForm = useFormik({
        initialValues:{
            sendername:'',
            content:'',
            image:'',
            like:'',
            comment:'',
            share:'',
        },
        onSubmit:async (values)=>{
            console.log(values);
            // setSubmitting(true);
            const res = await fetch('http://localhost:5000/post/add',{
                method:"POST",
                body:JSON.stringify(values),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            console.log(res.status);
            // setSubmitting(false);

            if(res.status===200){
                enqueueSnackbar('Post Created Successfully', {variant:'success'})
              }
              else{
                enqueueSnackbar('Something went Wrong', {variant:'error'})
            }
        }
    })

  return (
    <>
       <div>
        <h1>Post</h1>
        <form onSubmit={postForm.handleSubmit}>
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" class="form-control" id="sendername" onChange={postForm.handleChange} value={postForm.values.sendername} /> 
        <label className="form-label" for="form3Example1">Sender Name</label>
        <span className='ms-4 fs-6 text-danger'></span>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" class="form-control" id="content" onChange={postForm.handleChange} value={postForm.values.content} /> 
        <label className="form-label" for="form3Example1">Content</label>
        <span className='ms-4 fs-6 text-danger'></span>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="file" class="form-control" id="image" onChange={postForm.handleChange} value={postForm.values.image} /> 
        <label className="form-label" for="form3Example1">Image</label>
        <span className='ms-4 fs-6 text-danger'></span>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" class="form-control" id="like" onChange={postForm.handleChange} value={postForm.values.like} /> 
        <label className="form-label" for="form3Example1">Likes</label>
        <span className='ms-4 fs-6 text-danger'></span>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" class="form-control" id="comment" onChange={postForm.handleChange} value={postForm.values.comment} /> 
        <label className="form-label" for="form3Example1">Comments</label>
        <span className='ms-4 fs-6 text-danger'></span>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" class="form-control" id="share" onChange={postForm.handleChange} value={postForm.values.share} /> 
        <label className="form-label" for="form3Example1">Share</label>
        <span className='ms-4 fs-6 text-danger'></span>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary btn-block mb-4">Post</button>

        </form>
    </div>

    </>
  )
}

export default Post