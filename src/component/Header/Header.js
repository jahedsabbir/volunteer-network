import React from 'react';
import logo from '../../logos/Group 1329.png'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="container">
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home"> <img style={{width:'110px'}} src={logo} alt=""/> </Navbar.Brand>
        <Nav className="ml-auto">
         <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="#features">Donation</Nav.Link>
        <Nav.Link href="event">Events</Nav.Link>
        <Nav.Link href="#pricing">Blog</Nav.Link>
        </Nav>
        <Form inline>
       <Button variant="outline-primary" className="mr-2">Register</Button>
       <Link to='/eventAdd'><Button variant="outline-primary">Admin</Button></Link>
         </Form>
        </Navbar>
       
        </div>
    );
};

export default Header;