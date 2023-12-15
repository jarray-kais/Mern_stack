import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Updateathor = () => {
  const nav = useNavigate();
  const navigate = useNavigate()
  const { id } = useParams();
  const [name,setName]=useState("")
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/athor/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        
      })
      .catch((err) => console.log(err));
    
  
   
  }, [id]);

  const updateHandler = (e) => {
    e.preventDefault();
    const newObj = {
     name
    };
    axios
      .patch(`http://localhost:5000/api/athor/${id}`, newObj)
      .then((res) => {
        console.log(res.data);
        nav("/authors");
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
    <div>
      <h1 style={{textAlign : "center",
        color : "GrayText",marginTop : "30px",marginBottom : "30px"}}>Favorite Authors</h1>
        <h3><Link to ={'/authors'}> Home</Link></h3>
        <h3>Edit this auhor :</h3>
        <form onSubmit={updateHandler}>
        <div className="form-fields">
        <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
               {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}
            </div>
            <div className="btn">
            <button className="submit-input" type="submit">
              SUBMIT
            </button>
            <button className="submit-input" onClick={()=>{navigate('/authors')}}>
              Cancel
            </button>
            </div>
        </form>
        
    </div>
  )
}

export default Updateathor