import React from 'react';
import axios from 'axios';

import Animal from '../components/animal';
import Threat from '../components/threat';
import Habitat from '../components/habitat';
import Country from '../components/country';

const queryString = require('query-string');

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        type: -1,
        details: {}
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    const type = parsed.type;
    // const name = parsed.name;

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        this.setState({type: type, details: res.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    switch(this.state.type) {
      case '0':
        return <Animal details={this.state.details}/>;
      case '1':
        return <Threat details={this.state.details}/>;
      case '2':
        return <Habitat details={this.state.details}/>;
      case '3':
        return <Country details={this.state.details}/>;
      default:
        return null;
    }
  }
}
