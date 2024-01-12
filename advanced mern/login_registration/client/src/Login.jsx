import React,{useState} from 'react'
import axios from 'axios'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [errors, setErrors] = useState([])
    const navigate =useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', {email,password})
        .then((result)=>{
            console.log(result)
            if(result.data ==="success"){

           
            setEmail("")
            setPassword("")
            navigate('/home') 
        }

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
    <div
        className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <div>
        {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>))}
                    </div>
        <Form onSubmit={submitHandler}
        >
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Email</strong>
            </Form.Label>
            <Form.Control
              type="email"
              value={email}
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Password</strong>
            </Form.Label>
            <Form.Control
              type="password"
              value={password}
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </Button>
          </Form>
          </div>
        
    </div>
  )
}

export default Login