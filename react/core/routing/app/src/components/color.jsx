import React from 'react'
import { useParams } from 'react-router-dom'

const Color =(props)=>{
    const params = useParams()
    const col1= useParams()
    const col2= useParams()
    return(
        <div style={{background : col2.col2}}>
            <h3 style={{color : col1.col1}}>the word is : {params.word}</h3>

        </div>
    )
}
export default Color