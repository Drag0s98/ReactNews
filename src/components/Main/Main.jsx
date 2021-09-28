import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../Home'
import Form from '../Form'
import List from '../ListNews'
import Error from '../Error'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/' component={Home} exact />          
          <Route path='/form' component={Form}/>
          <Route path='/list' component={List}/>
          <Route component={Error} />
        </Switch>
      </main>

    );
  }
}

export default Main;
