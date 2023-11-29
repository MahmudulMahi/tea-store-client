

const Addtea = () => {
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
    const addTea = { name, chef, supplier, taste, category, details, photo };
    console.log(addTea);
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
                    placeholder="Enter Photo URL"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              <button className="btn btn-block  mt-6">Add Tea</button>
            </div>
          </form>
    </div>
  );
};

export default Addtea;