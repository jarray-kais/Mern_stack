import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Home(props) {
  const [number,setNumber]= useState(0)
  const nav = useNavigate()

  const submitid=(e)=>{
    e.preventDefault()
    nav('/hero/'+ number)
  }

  return (
    <div>
        <h1> welcome </h1>
        <Form onSubmit={submitid}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="number" onChange={(e)=>{setNumber(e.target.value)}}/>
        </Form.Group>
        <Button variant="primary">cet me this hero</Button>
      </Form>
    </div>
  )
}
