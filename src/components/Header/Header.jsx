import React, { Component } from "react";

import Nav from '../Nav';
import { userContext } from '../../context/userContext'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>ReactFilms</h1>
        <Nav />
        <userContext.Consumer>
          {({ user, logout }) => 
            user.name ?
              <>
                <p>Bienvenido, {user.name}</p>
                <button onClick={() => logout()}>Logout</button>
              </> : ""
          }
        </userContext.Consumer>
      </header>
    );
  }
}

export default Header;
