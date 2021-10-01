import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import { userContext } from '../../context/userContext'



class Home extends Component {

  constructor(props) {
    super(props)

    this.name = React.createRef();
  }
  //Paro el formulario para que no se envie
  submitForm = (event) => {
    event.preventDefault();
    console.log('Enviado' + this.name.current.value);
  }
  render() {
    return (
      <>
        <h3>Bienvenido a ReactNews, ¿como te llamas?</h3>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder='Paco' className='boxText' ref={this.name} />
          <userContext.Consumer>
            {({ user, login }) => {
              return <input type="submit" value="Join" className='button' onClick={() => login(this.name.current.value)} />
            }}
          </userContext.Consumer>
        </form>
        <section>
          <Carousel>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={this.props.data[0].urlToImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h6>{this.props.data[0].title}</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={this.props.data[1].urlToImage}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h6>{this.props.data[1].title}</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={this.props.data[2].urlToImage}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h6>{this.props.data[2].title}</h6>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </>

    );
  }
}

export default Home;
