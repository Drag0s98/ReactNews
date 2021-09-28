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

  async componentDidMount(){
    
  }
  

  paintNews = () => {
    return
  }

  render() {
    return (
      <section>

      </section>
    );
  }
}

export default Card;
