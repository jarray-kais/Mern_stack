import React, { useState , useEffect } from "react";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom'
const Createnew = () => {

  const [name , setName]= useState("")
  const [errors, setErrors] = useState([]);
  const navigate=useNavigate()
  const submitHandler = (e)=>{
    //A form whose button is clicked has a default action which will clear state and refresh the page
      //we prevent that default with the following line:
    e.preventDefault();


    
    axios.post("http://localhost:5000/api/athor",{
      name
    })
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      //upon a successful post request, we will setState back to "", which will clear out our form
     navigate('/authors')
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
  
  }


  return (
    <div>

      <h1 style={{textAlign : "center",
        color : "GrayText",marginTop : "30px",marginBottom : "30px"}}>Favorite Authors</h1>
        <h3><Link to ={'/authors'}> Home</Link></h3>
        <h3>Add a new author :</h3>
        <form onSubmit={submitHandler}>
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

export default Createnew