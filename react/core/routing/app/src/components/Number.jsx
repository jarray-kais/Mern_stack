import { useParams } from "react-router-dom"
import React from 'react'

 const Number=(props)=>{
    
  const params= useParams()

    return (
    <div>
        {isNaN(params.id) ?
        (<h3>then word is : {params.id}</h3>):
        <h3>the Number is : {params.id} </h3>
        }
       
    </div>
  )
}
export default  Number