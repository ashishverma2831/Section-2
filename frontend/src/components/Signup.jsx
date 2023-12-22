import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(4,'Name is too short'),
  email: Yup.string().email('Invalid email').required('Required'),
  password:Yup.string().required('Password is required').min(8,'Password is too short')
});

const Signup = () => {
  
  const signupForm = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },
    onSubmit:(values)=>{
      console.log(values);
    },
    validationSchema:SignupSchema
  })
  
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={signupForm.handleSubmit}>
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" class="form-control" id="name" onChange={signupForm.handleChange} value={signupForm.values.name} /> 
        <label class="form-label" for="form3Example1">Name</label>
        <span className='ms-4 fs-6 text-danger'>{signupForm.errors.name}</span>
      </div>
    </div>
    {/* <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" id="form3Example2" class="form-control" />
        <label class="form-label" for="form3Example2">Last name</label>
      </div>
    </div> */}
  </div>

  <div data-mdb-input-init class="form-outline mb-4">
    <input type="email" class="form-control" id='email' onChange={signupForm.handleChange} value={signupForm.values.email}/>
    <label class="form-label" for="form3Example3">Email address</label>
  </div>

  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="password" onChange={signupForm.handleChange} value={signupForm.values.password} class="form-control" />
    <label class="form-label" for="form3Example4">Password</label>
  </div>

  {/* <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label class="form-check-label" for="form2Example33">
      Subscribe to our newsletter
    </label>
  </div> */}

  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

  <div class="text-center">
    <p>or sign up with:</p>
    <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
        </form>
    </div>
  )
}

export default Signup