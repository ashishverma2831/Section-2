import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(4,'Name is too short'),
  email: Yup.string().email('Invalid email').required('Required'),
  password:Yup.string().required('Password is required').min(8,'Password is too short'),
  // .matches(/[a-zA-Z]\d/, 'password must include uppercase and lowercase letter'),
  confirm:Yup.string().oneOf([Yup.ref('password'),null], 'Password must match').required('confirm password is required')
});

const Signup = () => {
  
  const [passwordHidden, setPasswordHidden] = useState('password')
  const navigate = useNavigate();


  const signupForm = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirm:''
    },
    onSubmit:async (values,{setSubmitting,resetForm})=>{
      console.log(values);
      // 1 data
      // url
      // method
      // json object

      
      // for alerts
      //sweetalert
      //hot-toast
      //notistack
      setSubmitting(true);
      const res = await fetch('http://localhost:5000/user/add',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }
      });
      console.log(res.status);
      setSubmitting(false);
      
      if(res.status===200){
        enqueueSnackbar('Register Successfully', {variant:'success'})
        resetForm();
        navigate('/login');
      }
      else{
        enqueueSnackbar('Something went Wrong', {variant:'error'})
      }

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
        <span className='ms-4 fs-6 text-danger'>{signupForm.touched.name && signupForm.errors.name}</span>
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
    <span className='ms-4 fs-6 text-danger'>{signupForm.touched.email && signupForm.errors.email}</span>
  </div>

  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="password" onChange={signupForm.handleChange} value={signupForm.values.password} class="form-control" />
    <label class="form-label" for="form3Example4">Password</label>
    <span className='ms-4 fs-6 text-danger'>{signupForm.touched.password &&  signupForm.errors.password}</span>
  </div>

  <div data-mdb-input-init class="form-outline mb-4">
    <input type={passwordHidden?'password':'text'} id="confirm" onChange={signupForm.handleChange} value={signupForm.values.confirm} class="form-control" />
    <label class="form-label" for="form3Example4">Confirm Password</label>
    <span className='ms-4 fs-6 text-danger'>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
    {/* <button type='button' onClick={()=>{setPasswordHidden(!passwordHidden)}}>{passwordHidden?'Show':'Hide'}</button> */}
  </div>
  {/* <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label class="form-check-label" for="form2Example33">
      Subscribe to our newsletter
    </label>
  </div> */}

  <button type="submit" className="btn btn-primary btn-block mb-4" disabled={signupForm.setSubmitting}>Sign up</button>

  {/* <div class="text-center">
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
  </div> */}
        </form>
    </div>
  )
}

export default Signup