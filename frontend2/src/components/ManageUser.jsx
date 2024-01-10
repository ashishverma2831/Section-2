import { enqueueSnackbar } from 'notistack';
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

const ManageUser = () => {

    const [userList, setUserList] = useState([]);
    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);

        const data = await res.json();
        console.table(data);
        setUserList(data);
    }

    useEffect(() => {
      fetchUserData();
    },[])
    
    const deleteUser = async (id) =>{
      console.log(id);

      const res = await fetch('http://localhost:5000/user/delete/'+id,{
        method:'DELETE'
      })
      console.log(res.status);
      if(res.status===200){
        enqueueSnackbar('User Deleted Successfully',{variant:'success'})
        fetchUserData();
      }
    }
    const displayUserData = () =>{
      return <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Password</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user)=>{
            return <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>{user.password}</td>
              <td><Link to={'/updateuser/'+user._id} className='btn btn-primary'>Edit</Link></td>
              <td><Link className='btn btn-danger' onClick={()=>{deleteUser(user._id)}}>Delete</Link></td>
            </tr>
          })

          }
        </tbody>
      </table>
    }

  return (
    <div>
      <div className='container'>
        {displayUserData()}
      </div>
    </div>
  )
}

export default ManageUser