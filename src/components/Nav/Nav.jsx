import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";



const NavBody = () => {
  return (
    <nav>
      <Nav fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link as='p'><Link to='/'>Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as='p'><Link to='/form'>AddNew</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as='p'><Link to='/list'>Films</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  )
}

export default NavBody


/*
      <nav>

          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/form'><li>Add New</li></Link>
            <Link to='/list'><li>Films</li></Link>
          </ul>
      </nav>

*/