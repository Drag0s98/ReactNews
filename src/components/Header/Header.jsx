import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Nav from '../Nav';
import { userContext } from '../../context/userContext'

class Header extends Component {

  render() {
    return (
      <header>
        <h1 className='title'>ReactNews</h1>
        <Nav />
        <userContext.Consumer>
          {({ user, logout }) => 
            user.name ?
              <div className='welcome'>
                <p>Bienvenido, {user.name}</p>
                <Button variant="outline-light" onClick={() => logout()}>Logout</Button>
              </div> : ""
          }
        </userContext.Consumer>
      </header>
    );
  }
}

export default Header;
