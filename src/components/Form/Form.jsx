import React, { Component } from "react";
import './Form.css'

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }
  submitAndsetValues = (event) => {
    event.preventDefault();
    let author = event.target.elements.author.value;
    let content = event.target.elements.content.value;
    let description = event.target.elements.description.value;
    let publishedAt = event.target.elements.publishedAt.value;
    let title = event.target.elements.title.value;
    let url = event.target.elements.url.value;
    let urlToImage = event.target.elements.urlToImage.value;
    let data = {
      author: author,
      content: content,
      description: description,
      publishedAt: publishedAt,
      title: title,
      url: url,
      urlToImage: urlToImage
    }
    this.props.handleStateData(data)
  }
  render() {
    return (
      <>
        <h5 className='formTitle'>Agrega una pelicula</h5>
        <form onSubmit={this.submitAndsetValues} className='newsForm'>
          <label>Author</label>
          <input type="text" name='author' />
          <label>Content</label>
          <textarea name="content" className='content' cols="30" rows="10" />
          <label>Description</label>
          <textarea name="description" className='description' cols="30" rows="10" />
          <label>Publised at</label>
          <input type="date" name='publishedAt' />
          <label>Title</label>
          <input type="text" name='title' />
          <label>Url</label>
          <input type="text" name='url' />
          <label>Image</label>
          <input type="text" name='urlToImage' />
          <input type="submit" value="Publish" className='button' />
        </form>
      </>
    );
  }
}

export default Form;
