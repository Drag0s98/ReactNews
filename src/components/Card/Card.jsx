import React, { Component } from "react";
import Api from '../ListNews'
import Local from '../Form'


class Card extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  render() {

    const { author, content, description, publishedAt, title, url, urlToImage } = this.props.info
    console.log(this.props.info);
    return (
      <section>
        <article>
            <p>{author}</p>
            <p>{content}</p>
            <p>{description}</p>
            <p>{publishedAt}</p>
            <p>{title}</p>
            <p>{url}</p>
            <p>{urlToImage}</p>
            <button onClick={this.props.remove}>Delete</button>
        </article>
      </section>
    );
  }
}

export default Card;
