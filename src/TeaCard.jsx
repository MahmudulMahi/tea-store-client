import React from 'react';

const TeaCard = ({ tea }) => {

  const { name, chef, supplier, taste, category, details, photo } = tea
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
            <button className="btn join-item">Edit</button>
            <button className="btn join-item">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaCard;