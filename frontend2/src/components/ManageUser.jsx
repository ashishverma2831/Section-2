import React,{useEffect} from 'react'

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
    
    const displayUserData = () =>{

    }

  return (
    <div>ManageUser</div>
  )
}

export default ManageUser