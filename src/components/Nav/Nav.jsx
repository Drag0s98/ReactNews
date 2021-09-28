import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <a href="/"><li>Home</li></a>
          <a href="/form"><li>AddNew</li></a>
          <a href="/list"><li>Films</li></a>
        </ul>
      </nav>
    );
  }
}

export default Nav;
