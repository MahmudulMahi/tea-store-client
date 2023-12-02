import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updatetea = () => {

  const tea=useLoaderData()

  const { _id, name, chef, supplier, taste, category, details, photo } = tea
  const handleAddTea = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newTea = { name, chef, supplier, taste, category, details, photo };
    console.log(newTea);

    // send data to server
    fetch('http://localhost:5000/tea',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(newTea)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'success',
          text: 'add tea successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <div className='bg-[#F4F3F0] p-24'>
      <h2>Add a Tea</h2>
    <form onSubmit={handleAddTea} >
            {/* Row 1 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Enter Tea name"
                    className="input w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-3 md:mt-0">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="chef"
                    defaultValue={chef}
                    placeholder="Enter Tea Chef"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* row 2 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Enter Tea Supplier"
                    className="input w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-3 md:mt-0">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    placeholder="Enter Tea Taste"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* Row 3 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Enter Tea Category"
                    className="input w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-3 md:mt-0">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    defaultValue={details}
                    placeholder="Enter Tea Details"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* Row 4 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    placeholder="Enter Photo URL"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              <button className="btn btn-block  mt-6">update Tea</button>
            </div>
          </form>
    </div>
  );
};

export default Updatetea;