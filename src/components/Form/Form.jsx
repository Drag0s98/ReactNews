import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import './Form.css'

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      error: false
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
    if (author === '' || content === '' || description === '' || publishedAt === '' || title === '' || url === '' || urlToImage === '') {
      this.setState({ error: true })
    } else {
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
      this.setState({ error: false })
    }
  }
  render() {
    return (
      <>
        <h5 className='formTitle'>Agrega una pelicula</h5>
        {this.state.error === true ?
          <Alert id='alert' variant="danger" onClose={() => this.setState({ error: false })} dismissible>
            <Alert.Heading id='name'>Oh vaya! Ha ocurrido un error!</Alert.Heading>
            <p>
              Asegurate de que has introducido todos los campos del formulario,
              de ser asi y sigue apareciendo el error pongase en contacto con
              un administrador!
            </p>
          </Alert> : ''}
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
            <input type="submit" value="Publish" className='buttonForm' />
        </form>
      </>
    );
  }
}

export default Form;
