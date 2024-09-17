import React, { useEffect, useState } from "react";

export default function ProductForm() {
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
}
