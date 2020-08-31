import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignedOutUser from './SignedOutUser';
import SignedInUser from './SignedInUser';
import { Link, NavLink } from 'react-router-dom';
import { RootState } from '../../app/reducers/rootReducer';
import { useSelector } from 'react-redux';

export default function Navigationbar() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <Navbar bg="primary" variant="dark" className="navbar">
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
      {isAuthenticated ? <SignedInUser /> : <SignedOutUser />}
    </Navbar>
  );
}
