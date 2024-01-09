import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const loginForm = useFormik({
    initialValues:{
      email:'',
      password:''
    },
  
    onSubmit: async (values)=>{

      console.log(values);


      const res = await fetch('http://localhost:5000/user/authenticate',{
        method:"POST",
        body:JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }
      });

      if(res.status===200){
        enqueueSnackbar('Login in successfully',{ variant:'success'})
        navigate('/');
      }
      else if(res.status===401){
        enqueueSnackbar('Invalid Credentials',{ variant:'error'})
      }
      else{
        enqueueSnackbar("Error Occured! Try again later.",{variant:'error'});
      }
    }
  })

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginForm.handleSubmit}>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="email" id="email" class="form-control" onChange={loginForm.handleChange} value={loginForm.values.email} />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="password" class="form-control" onChange={loginForm.handleChange} value={loginForm.values.password} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  {/* <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
        <label class="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div> */}

  <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  {/* <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div> */}
        </form>
    </div>
  )
}

export default Login