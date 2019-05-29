import React from 'react';
import "./styles.css";
import {Navbar,  Nav } from "react-bootstrap"
const Header = () =>(
<Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>Personal Tracker</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>Home</Nav.Link>

    </Nav>
    <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Autenticado
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>

);

export default Header

