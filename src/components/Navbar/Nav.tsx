import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Nav.css";

class Navheader extends Component {
  render() {
    return (
      <Navbar style={{ height: "100px", backgroundColor: "black" }}>
        <Container className="nav-container">
          <Navbar.Brand href="#home" className="navbrand">
            <img src="./Logo.jpg" alt="Logo" className="logo" />
            <h3 className="text-light">Food Chain</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Navheader;
