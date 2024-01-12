import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name,setName] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);
    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/api/register', {name,email,password})
        .then((result)=>{
            console.log(result)
            setName("")
            setEmail("")
            setPassword("")
            navigate('/home')

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
        <h2>Register</h2>
        {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}
        <Form onSubmit={submitHandler}
        >
        
        <Form.Group className="mb-3">
        
            <Form.Label >
              <strong>Name</strong>
            </Form.Label>
            <Form.Control
              type="text"
              value={name}
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
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
            Register
          </Button>
          </Form>
          <p>Already Have an Account</p>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </Link>
          
        
      </div>
    </div>
  )
}

export default Signup