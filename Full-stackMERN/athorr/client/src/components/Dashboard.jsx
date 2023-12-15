import { useEffect, useState } from 'react'
import  React from 'react';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const Dashboard = () => {
    const [athor, setAthor] = useState([])
    const navigate = useNavigate();
    function refrech() {
        axios.get("http://localhost:5000/api/athor")
            .then(res => {
                console.log(res.data)
                setAthor(res.data)
            })
            .catch(err => {
             console.log(err
                )
            })
    }
    useEffect(() => {
        refrech()
    }, [])

    const DeleteThisAthor = (id) => {
        axios.delete("http://localhost:5000/api/athor/" + id)
            .then(res => {
                refrech()
                console.log(res.data)
                const filteredathor = athor.filter((eachathor) => {
                    return eachathor._id !== id
                })
                setAthor(filteredathor)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      

  return (
    <div >
  
    <h1 style={{textAlign : "center",
        color : "GrayText",marginTop : "30px",marginBottom : "30px"}}>Favorite Authors</h1>
        <h3>
        <Link to ={'/authors/new'}> Add an author</Link>
        </h3>
        <h3>we have quotes by :</h3>


         <TableContainer component={Paper}>
         <Table sx={{ minWidth: 700 }} aria-label="customized table">
         <TableHead>
         <TableRow>
         <StyledTableCell>Author</StyledTableCell>
            <StyledTableCell align="left">Actions available</StyledTableCell>
         </TableRow>
         </TableHead>
         <TableBody>
         {
            athor.map((oneAT,index)=>{
                return(
                    <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">

                    {oneAT.name}
                    </StyledTableCell>
                    <StyledTableCell>
                    <Button style={{color : "red"}}  onClick={() => { DeleteThisAthor(oneAT._id) }}>delete</Button>
                    <Button  onClick={()=>{navigate(`/authors/${oneAT._id}/edit`)}} style ={{marginLeft : "10px"}}>edit</Button>
                    </StyledTableCell>
                    </StyledTableRow>
                    )}
         )}
         </TableBody>
         </Table>
         </TableContainer>
       
    </div>
  )
}

export default Dashboard