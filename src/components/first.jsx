import React, { Component } from 'react';
import { Navbar,
         Nav,
         Container,
        } from 'react-bootstrap';
import './style.scss';

class First extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar expand="lg" className="shadow-sm p-2">
                  <Container>
  <Navbar.Brand href="#home" className="text-white">React-Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home" className="active p-3 text-white">Home</Nav.Link>
      <Nav.Link href="#link" className="p-3 text-white">About</Nav.Link>
      <Nav.Link href="#home" className="p-3 text-white">Services</Nav.Link>
      <Nav.Link href="#link" className="p-3 text-white">Blog</Nav.Link>
      <Nav.Link href="#home" className="p-3 text-white">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </React.Fragment>
         );
    }
}
 
export default First;