import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

  const loadesUsers = useLoaderData()
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
          loadesUsers.map(user=>  <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>Blue</td>
          </tr>)
        }
 
       
        </tbody>
      </table>
    </div>
  );
};

export default Users;