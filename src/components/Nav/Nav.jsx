import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
class NavClass extends Component {
  render() {
    return (

      <Navbar collapseOnSelect expand="lg" bg="#6B705C" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/form'>Add New</Link></Nav.Link>
              <Nav.Link><Link to='/list'>Films</Link></Nav.Link>
              <Nav.Link eventKey={2} href="https://github.com/Drag0s98/toDo_react">GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }
}

export default NavClass;
/*
      <nav>

          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/form'><li>Add New</li></Link>
            <Link to='/list'><li>Films</li></Link>
          </ul>
      </nav>

*/