import { Formik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React ,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {

    const {id} =  useParams();
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    // console.log(id);

    const getUserData = async ()=>{
        const res = await fetch('http://localhost:5000/user/getbyid/'+id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserData(data)
    }

    useEffect(() => {
        getUserData();
    }, [])
    

    const submitForm = async (values)=>{
        console.log(values);

        const res = await fetch('http://localhost:5000/user/update/'+id,{
          method:'PUT',
          body:JSON.stringify(values),
          headers:{
            'Content-Type':'application/json'
          }
        });

        console.log(res.status);
        if(res.status === 200){{
          enqueueSnackbar('User Updated Successfully',{variant:'success'});
          navigate('/manageuser')
        }
    }
  }

  return (
    <>
        <div>
        <h1>Edit</h1>
        {
          userData!==null?(
            <Formik initialValues={userData} onSubmit={submitForm}>
          {(signupForm)=>{
            return (
            <form onSubmit={signupForm.handleSubmit}>
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" class="form-control" id="name" onChange={signupForm.handleChange} value={signupForm.values.name} /> 
        <label className="form-label" for="form3Example1">Name</label>
        <span className='ms-4 fs-6 text-danger'>{signupForm.touched.name && signupForm.errors.name}</span>
      </div>
    </div>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="email" class="form-control" id='email' onChange={signupForm.handleChange} value={signupForm.values.email}/>
    <label className="form-label" for="form3Example3">Email address</label>
    <span className='ms-4 fs-6 text-danger'>{signupForm.touched.email && signupForm.errors.email}</span>
  </div>

  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="password" onChange={signupForm.handleChange} value={signupForm.values.password} class="form-control" />
    <label class="form-label" for="form3Example4">Password</label>
    <span className='ms-4 fs-6 text-danger'>{signupForm.touched.password &&  signupForm.errors.password}</span>
  </div>

  {/* <div data-mdb-input-init class="form-outline mb-4">
    <input type={passwordHidden?'password':'text'} id="confirm" onChange={signupForm.handleChange} value={signupForm.values.confirm} class="form-control" />
    <label class="form-label" for="form3Example4">Confirm Password</label>
    <span className='ms-4 fs-6 text-danger'>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
  </div> */}
  <button type="submit" className="btn btn-primary btn-block mb-4" disabled={signupForm.setSubmitting}>Set</button>
        </form>);
          }}
        </Formik>
          ):(<h2 className='text-center'>loading...</h2>)
        }
        
    </div>
    </>
  )
}

export default UpdateUser