import React, { Component } from "react";

import { userContext } from '../../context/userContext'

class Home extends Component {

  constructor(props) {
    super(props)

    this.name = React.createRef();
  }
  //Paro el formulario para que no se envie
  submitForm = (event) => {
    event.preventDefault();
    console.log('Enviado' + this.name.current.value);
  }

  render() {
    return (
      <>
        <h3>Bienvenido a ReactFilm, ¿como te llamas?</h3>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder='Paco' ref={this.name} />
          <userContext.Consumer>
            {({ user, login }) => {
              return <input type="submit" value="Join" onClick={() => login(this.name.current.value ) } />
            }}
          </userContext.Consumer>
        </form>
      </>
    );
  }
}

export default Home;
