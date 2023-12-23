import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';

const ShowOne = () => {

    const { id } = useParams()
    const [thisproduct, setProduct] = useState(null)
    const nav=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:5000/api/product/" + id)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])




    return(
        <div  >
        {
            thisproduct ?
            <ul style={{listStyleType :"none"}}>
            
                <h1>{thisproduct.title}</h1>
                <Button onClick={()=>nav('/')}>Acceuil</Button>
             
            <ListGroup style={{margin : "10px 20px"}}>
                <ListGroup.Item >
                <li>Price : {thisproduct.price}</li>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup style={{margin : "10px 20px"}}>
                <ListGroup.Item >
                <li>description : {thisproduct.description}</li>
                </ListGroup.Item>
            </ListGroup>
            </ul> :<h3>Loading</h3>

        }

        </div>
    )
}
export default ShowOne