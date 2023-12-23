import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/student/" + id)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const updateHandler = (e) => {
    e.preventDefault();
    const newObj = {
      title,
      price,
      description,
    };
    axios
      .patch(`http://localhost:5000/api/product/${id}`, newObj)
      .then((res) => {
        console.log(res.data);
        nav("/");
      })
      .catch(err => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })
  };

  return (
    <div className="container">
      <header>Product Manager</header>
      <form onSubmit={updateHandler}>
      <div className="error">
      {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "white" }}>{err}</p>
                ))}
                </div>
        <div className="form-fields">
          <label>Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            //We set our value to title here mainly to help us clear out the inputs on submission
            value={title}
            name="title"
            type="text"
          />
        </div>
        <br />

        <div className="form-fields">
          <label>Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            name="price"
            type="number"
          />
        </div>

        <br />

        <div className="form-fields">
          <label>Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            type="text"
          />
        </div>

        <br />
        {/* Could also be a button element. Try it! */}
        <input className="submit-input" type="submit" value="update" />
      </form>
    </div>
  );
};

export default Update;
