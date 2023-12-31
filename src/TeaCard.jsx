import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TeaCard = ({ tea,teas,setTeas }) => {

  const { _id, name, chef, supplier, taste, category, details, photo } = tea

  const handelDelete = _id => {
    console.log(_id)
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
     
        fetch(`http://localhost:5000/tea/${_id}`,{
          method:'DELETE'
        })
        .then(res =>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount >0){
          Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        const remaining=teas.filter(cof =>cof._id !==_id)
        setTeas(remaining)
          }
        })
      }
    });
  }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={photo} alt="Movie" /></figure>
      <div className="flex justify-between w-full">
        <div>
          <h2 className="card-title">Name:{name}</h2>
          <p>{chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end ">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
           <Link to={`/updatetea/${_id}`} >
           <button className="btn join-item">Edit</button>
           </Link>
            <button onClick={() => handelDelete(_id)} className="btn join-item bg-red-800">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaCard;