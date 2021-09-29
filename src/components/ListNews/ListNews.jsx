import React, { Component } from "react";
import axios from "axios";

import Card from '../Card'

class ListNews extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      country: 'mx',
      category: 'science',
    }

  }

  async componentDidMount() {
    let country = this.state.country
    let category = this.state.category
    await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b082605df5f548f48320cc9653ff30e1`)
      .then((res) => {
        console.log('Api recived');
        this.setState({ data: res.data.articles.slice(0, 5) })
        if (this.props.handleStateData() != []) {
          this.props.handleStateData().map((param) => {
            return this.setState({ data: [...this.state.data, param] })
          })
        }
      })
  }


  removeOne = (key) => {
    const del = this.state.data.filter((current, i) => i !== key)
    this.setState({ data: del })
  }

  paintCards = () => {
    return this.state.data.map((param, i) => <Card info={param} key={i} remove={() => this.removeOne(i)} />)
  }

  render() {
    return (
      <section>
        <article>
          {this.paintCards()}
        </article>
      </section>
    );
  }
}

//8197b9847d9a42359c9a289cd44d91ef

export default ListNews;
