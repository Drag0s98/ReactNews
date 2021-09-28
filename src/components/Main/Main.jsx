import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../Home'
import Form from '../Form'
import News from '../Card'
import Error from '../Error'
import Api from '../ListNews'

class Main extends Component {
  constructor(props) {
    super(props)


    //aqui se hacen los estados para sibling to sibling
    this.state = {
      data: []
    }
  }


  handleSetData = (data) => {
    this.setState({ data: [...this.state.data, data] })
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/form' component={() => <Form handleStateData={(data) => this.handleSetData(data)} />} />
          <Route component={() => <Api handleStateData={(data) => this.handleSetData(data)} />} />

          <Route path='/news' component={() => <News news={this.state.data} />} />
          <Route component={Error} />
        </Switch>
      </main>

    );
  }
}

export default Main;


/* https://learnwithparam.com/blog/how-to-pass-props-in-react-router/ */