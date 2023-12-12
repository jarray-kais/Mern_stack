import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';


const Dashboard=()=> {
    //1
    const [Product, setProduct] = useState([])
    
    //2
    function refrech() {
        axios.get("http://localhost:5000/api/product")
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => {
             console.log(err
                )
            })

    }
    useEffect(() => {
        refrech()
    }, [])

  return (
    <div className='body' >
        <h1 style={{textAlign : "center",
        color : "GrayText",marginTop : "30px",marginBottom : "30px"}}>All Products</h1>

        {
            Product.map((oneProduct,index)=>{
                return(
                    <div>
                    <ListGroup style={{margin : "10px 20px"}}>
                        <ListGroup.Item >
                                    <Link to={"/product/" + oneProduct._id}>
                                        {oneProduct.title}
                                    </Link>
                        </ListGroup.Item>
                    </ListGroup>
        </div>
                )
            })
        }
    </div>
  )
}

export default Dashboard