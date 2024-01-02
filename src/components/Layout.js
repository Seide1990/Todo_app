import { useState,useReducer} from 'react';
 import { Link } from 'react-router-dom';
 import style from   './style1.module.css';
 import { Outlet } from 'react-router-dom';
 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

//import './style.css'


export default function Layout(props){


    return(

    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>

          <Nav className="me-auto">

            <Nav.Link href="/">List</Nav.Link>
            <Nav.Link href="/Products">Products</Nav.Link>
            <Nav.Link href="/Todo-app">Todo_App</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

       <Outlet></Outlet>
       </>
    )

}