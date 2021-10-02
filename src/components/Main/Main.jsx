import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

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
    }
  }


  handleSetData = (data) => {
    this.setState({ data: [...this.state.data, data] })
    console.log('ejecuto***' + data);
  }

  render() {
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