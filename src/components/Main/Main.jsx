//Imports externos
import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
//Imports personales
import data from '../../data'
import Home from '../Home'
import Form from '../Form'
import Error from '../Error'
import Api from '../ListNews'

class Main extends Component {
  constructor(props) {
    super(props)


    //aqui se hacen los estados para sibling to sibling
    this.state = {
      data: data,
      redirect: false,
    }
  }

  //Funcion que se la paso a los hijos para recibir sus datos y guardarlos en el padre
  handleSetData = (data) => {
    this.setState({
      data: [...this.state.data, data],
      redirect: true
    })
    console.log('ejecuto***' + data);

  }

  render() {
    if (this.state.redirect === true) {
      return (
        <>
          <Redirect from='/form' to='/list' />
          <Route path='/list' component={() => <Api handleStateData={() => this.state.data} />} />
          {this.setState({ redirect: false})}
        </>
      )
    }
    return (
      <main>
        <Switch>
          <Route path='/' component={() => <Home data={this.state.data} />} exact />
          <Route path='/form' component={() => <Form handleStateData={(data) => this.handleSetData(data)} />} />
          <Route path='/list' component={() => <Api handleStateData={() => this.state.data} />} />
          <Route component={Error} />
        </Switch>
      </main>

    );
  }
}

export default Main;