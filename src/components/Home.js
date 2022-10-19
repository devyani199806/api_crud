import React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PopModal from './PopModal';

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
  

function Home() {
  const [spacing, setSpacing] = React.useState(2);
    const [emp, setEmp] = useState([]);
    const handleOpen = () => setOpenPopup(true);
    const handleClose = () => setOpenPopup(false);
    const [openPopup, setOpenPopup] = React.useState(false);
    
    // const [openmodal, setOpenModal] = React.useState(false);

    useEffect(() => {
        axios.get('http://localhost:3333/Student').then((
        res) => {
          setEmp(res.data);
        })
      },[]);

  return (
    <>
    <Container maxWidth="md">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
        <h1 style={{color:'#2196f3'}}>Employees List</h1>
        </Grid>
        <Grid item xs={6} md={4}>
        <h1><Button variant="contained" color="success" onClick={()=>{setOpenPopup(true)}}>Add Employee</Button></h1>
        </Grid>
      </Grid>
    </Box>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500}} aria-label="customized table">
        <TableHead style={{background:'#2a3eb1'}}>
          <TableRow >
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">LastName</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {emp.map((row) => (
            
            <StyledTableRow key={row.id}>
              <StyledTableCell  component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.lname}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell style={{color:(row.status==="pending") ? 'yellow' :( row.status==="approved") ? 'green' :  'red' }} align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {emp.map((row) => (
            <Grid key={row} item>
              <Paper
                sx={{
                  height: 200,
                  width: 300,
                  background:(row.status==="pending") ? 'yellow'
                             :(row.status==="approved") ? 'green' :  'red' 
                    }}
              >
                   
                <h2>{row.name + row.lname}</h2>
                <h2>{row.email}</h2>
                <h2>{row.status}</h2>
              </Paper>
           
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* {emp.map((row) => (
        <Container style={{background:(row.status==="pending") ? 'yellow' :( row.status==="approved") ? 'green' :  'red' }}>
          <h1>{row.name+row.lname}</h1>
          <h2>{row.email}</h2>
          <h3>{row.status}</h3>
         </Container>
      ))} */}
  
      <PopModal
      openPopup = {openPopup}
      setOpenPopup = {setOpenPopup}
      handleClose={handleClose}
      >
      </PopModal>
      
    </>
  )
}

export default Home
