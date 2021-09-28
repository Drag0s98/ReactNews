import React, { Component } from "react";
import axios from "axios";

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
    let res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=8197b9847d9a42359c9a289cd44d91ef`)
    console.log('Api recived');
    this.setState({ data: res.data.articles })
  }
  // handleLoad = ( async () => {
  //   console.log();
  //   let nose;
  //   let data = this.state.data
  //   let map = data.map((param) => {
  //     nose = {
  //       author: param.author,
  //       content: param.content,
  //       description: param.description,
  //       publisedAt: param.publisedAt,
  //       title: param.title,
  //       url: param.url,
  //       urlToImage: param.urlToImage

  //     }
  //     return nose;
  //   })
  //   this.props.handleStateData(map)
  // })()
  
  render() {
    return (
      <>
      {() => this.handleLoad()}
      </>
    );
  }
}

//8197b9847d9a42359c9a289cd44d91ef

export default ListNews;
