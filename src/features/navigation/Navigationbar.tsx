import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';

export default function Navigationbar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/">
        NB
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} exact to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/posts">
          Posts
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
