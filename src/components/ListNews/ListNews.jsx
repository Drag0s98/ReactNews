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
    console.log(this.props.handleStateData());
    let country = this.state.country
    let category = this.state.category
    await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b082605df5f548f48320cc9653ff30e1`)
      .then((res) => {
        console.log('Api recived');
        this.setState({ data: res.data.articles })
        // this.setState({ data: this.props.handleStateData() })
        this.setState({ data: [...this.state.data, this.props.handleStateData()] })

        console.log(this.state.data.flat());
      })
    console.log('Api recived');
    // this.setState({ data: res.data.articles })
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
      <div>
      </div>
    );
  }
}

//8197b9847d9a42359c9a289cd44d91ef

export default ListNews;
