import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { Box } from "@mui/system";


function createData(Name, Description, Image, Technologies, Github, Deploy) {
  return { Name, Description, Image, Technologies, Github, Deploy};
}


const url = "http://127.0.0.1:8000/api";

const Show = () => {
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    getAllElements();
  }, []);

  const getAllElements = async () => {
    const response = await axios.get(`${url}/works`);
    setElementos(response.data);
  };

  const deleteElement = async (id) => {
    await axios.delete(`${url}/works/${id}`);
    getAllElements();
  };

  return (
    
    
    <Box sx={{display:'flex', alignItems:'center', alignContent:'center', width:'100wh', height:'100vh', flexDirection:''}}>
      
      <Link to="/create" >
        {" "}
        Create{" "}
      </Link>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth:350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PROJECTS</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Technologies</TableCell>
            <TableCell align="right">Github</TableCell>
            <TableCell align="right">Deploy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {elementos.map((elemento) => (
            <TableRow
              key={elemento.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {elemento.id}
              </TableCell>
              <TableCell align="right">{elemento.name}</TableCell>
              <TableCell align="right">{elemento.description}</TableCell>
              <TableCell align="right">{elemento.image}</TableCell>
              <TableCell align="right">{elemento.technologies}</TableCell>
              <TableCell align="right">{elemento.github}</TableCell>
              <TableCell align="right">{elemento.deploy}</TableCell>
              <Link to={`/edit/${elemento.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <Button
                  onClick={() => deleteElement(elemento.id)}
                  className="btn btn-danger"
                >
                  Delete
                </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};
export default Show;
