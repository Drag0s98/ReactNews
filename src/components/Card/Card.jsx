import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import './Card.css'

class Cardbody extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  render() {
    const { author, content, description, publishedAt, title, url, urlToImage } = this.props.info
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={urlToImage}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{author}</ListGroupItem>
          <ListGroupItem>{publishedAt}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href={url}>Saber m&aacute;s</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Cardbody;
