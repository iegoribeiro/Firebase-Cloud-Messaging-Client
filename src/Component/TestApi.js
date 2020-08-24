import React from 'react';
import api from "../service/connection"

export default class TestApi extends React.Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    api.get('').then(res => {
      console.log(res);
      this.setState({ response: res.data });
    })
    .catch(error => {
      console.log("Ocorreu um erro");
    });
  }

  render() {
    return (
      <h1>{ this.state.response.response  }</h1>
    )
  }
}