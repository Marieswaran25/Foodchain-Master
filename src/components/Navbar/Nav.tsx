import { faArrowRightToBracket, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Nav.css";

class Navheader extends Component {
  render() {
    return (
     
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="navbrand">
        <img src="./Logo.jpg" alt="Logo" className="logo" />
        <h3 className="text-light">Food Chain</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="nav1">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About us</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link id="cart"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
            <Nav.Link href="#signin" id="signin">Sign up <FontAwesomeIcon icon={faArrowRightToBracket} /></Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default Navheader;
