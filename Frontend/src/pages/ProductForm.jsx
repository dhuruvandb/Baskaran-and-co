import React, { useEffect, useState } from "react";

export const ProductForm = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    setData([...data, obj]);
    e.target.reset();
  };

  useEffect(() => {
    // addData("http://localhost:5000/admin/addproduct", data)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
  });

  return (
    <div>
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit} method="post">
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="imgUrl" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
