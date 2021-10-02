//Imports externos
import React, { Component } from "react";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
//Imports personales
import './ListNews.css'
import Card from '../Card'

class ListNews extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      country: 'mx',
      category: 'science',
      spinner: true
    }

  }
      //Realizo una precarga del estado y de la api
  async componentDidMount() {
    let country = this.state.country
    let category = this.state.category
    await new Promise(resolve => setTimeout(resolve, 2000)); // simular retardo
    await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_NEWS}`)
      .then((res) => {
        console.log('Api recived');
        this.setState({ data: res.data.articles.slice(0, 5) }) //Acorto los datos recibidos de la api a 5 noticias
        if (this.props.handleStateData() !== []) { //Compruebo que no este vacio los props del padre
          this.props.handleStateData().map((param) => {
            this.setState({ spinner: false})
            return this.setState({ data: [...this.state.data, param] }) //Anido lo que hay en el estado con lo que recibo de la api
          })
        }
      })
  }
  //Funcion para borrar una noticia
  removeOne = (key) => {
    const del = this.state.data.filter((current, i) => i !== key)
    this.setState({ data: del })
  }

  //Funcion para pintar las noticias
  paintCards = () => {
    return this.state.data.map((param, i) => <Card info={param} key={i} remove={() => this.removeOne(i)} />)
  }

  render() {
    return (
      <section className='newsList'>
        <article className='news'>
          {this.state.spinner === true?<PropagateLoader color={'#EB5E28'} size={50}/>: this.paintCards()}
        </article>
      </section>
    );
  }
}


export default ListNews;
