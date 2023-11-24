import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

const Hero=(props)=> {
    // anything dynamic needs UseState
    const [hero , setHero]= useState([])
    const navigate = useNavigate()
    const id = useParams()

    useEffect(()=>{
        axios.get( `https://akabab.github.io/superhero-api/api/all.json`)
        .then(res=>{
          console.log(res)
          setHero(res.data)
        console.log(res.data)
      })
        .catch(err=>{
            console.log(err)
            navigate("/Error")
        })

    },[id])



  return (
    <div>

      
      <Table striped bordered hover variant="dark">
        <thead>
        <tr>
          <th scope='col'> #</th>
          <th scope='col'> image</th>
          <th scope='col'> name</th>
          <th scope='col'> fullname</th>
          <th scope='col'> publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            hero.map(herore=>{
              return(
              <tr key={herore.id}>
                <th scope='row'>{herore.id}</th>
                <td>
                  <img src={herore.images.sm}/>
                </td>
                <td>{herore.name}</td>
                <td>{herore.biography.fullname ?
                  herore.biography.fullname:"no Data"
                }</td>
                <td>
                {herore.biography.publisher}
                </td>
              </tr>
            )})
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Hero