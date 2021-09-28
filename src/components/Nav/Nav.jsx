import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/form'><li>Add New</li></Link>
          <Link to='/list'><li>Films</li></Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
