import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import io from 'socket.io-client';

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  //1
  const [Product, setProduct] = useState([]);
  const navigate = useNavigate();
  const [socket] = useState(() => io(':5000'));

  //2
  function refrech() {
    axios
      .get("http://localhost:5000/api/product")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    refrech();
    alert('welcome ');
    socket.on('Welcome', data => console.log(data));
    return () => socket.off("Welcome");
    
  }, [socket]);
  const DeleteThisProduct = (id) => {
    axios
      .delete("http://localhost:5000/api/product/" + id)
      .then((res) => {
        refrech();
        console.log(res.data);
        const filteredProducts = Product.filter((eachProduct) => {
          return eachProduct._id !== id;
        });
        setProduct(filteredProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="box1">
        <h1
          style={{
            textAlign: "center",
            color: "GrayText",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          All Products
        </h1>
        <Button onClick={() => navigate("/product/create")}>
          Add New Product
        </Button>
      </div>
      {Product.map((oneProduct, index) => {
        return (
          <div key={index}>
            <ListGroup style={{ margin: "10px 40px" }}>
              <ListGroup.Item id="box">
                <div>
                  <Link to={"/product/" + oneProduct._id}>
                    {oneProduct.title}
                  </Link>
                </div>
                <div>
                  <Button
                    variant="danger"
                    onClick={() => {
                      DeleteThisProduct(oneProduct._id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => {
                      navigate(`/product/update/${oneProduct._id}`);
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    Update
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
