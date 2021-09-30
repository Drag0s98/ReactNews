//Imports de paquetes
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react'

//Imports personales
import './styles/styles.scss';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { userContext } from './context/userContext'



export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {
        name: ''
      }
    }
  }
  //Creamos las variables de login y logout para fackear un login falso
  login = (name) => this.setState({ user: { name } })
  logout = () => this.setState({ user: { name: '' } })
  render() {
    //Creamos el objeto user para pasarlo como valor por el provider
    const user = {
      user: this.state.user,
      login: this.login,
      logout: this.logout
    }
    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={user}>
            <Header />
            <Main />
          </userContext.Provider>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App;


