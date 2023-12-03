import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

  const loadesUsers = useLoaderData()
  const [users,setUsers]=useState(loadesUsers)

  const handelDelete=id=>{
    fetch(`http://localhost:5000/user/${id}`,{
      method:'DELETE'
    })
    .then(res =>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        console.log('delete successfully')

        const remainingUser=users.filter(user=>user._id !=id)
        setUsers(remainingUser)
      }
    })
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>CreatedAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
        {
          users.map(user=>  <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td>
              <button onClick={()=> handelDelete(user._id)}>X</button>
            </td>
          </tr>)
        }
 
       
        </tbody>
      </table>
    </div>
  );
};

export default Users;