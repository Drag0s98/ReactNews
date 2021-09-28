import React, { Component } from "react";
import axios from "axios";

class ListNews extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       country: 'mx',
       category: 'science'
    }

  }
  async componentDidMount() {
    let country = this.state.country
    let category = this.state.category
    let res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=8197b9847d9a42359c9a289cd44d91ef`)
    res.data();
  }



  render() {
    return (
      <h4>Aqui ira la lista de noticias</h4>

    );
  }
}

//8197b9847d9a42359c9a289cd44d91ef

export default ListNews;
