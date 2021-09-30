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
    const id = parsed.id;
    const apis = [
      'https://3nusxmqtj2.execute-api.us-east-1.amazonaws.com/animaldetail?id=',
      'https://3nusxmqtj2.execute-api.us-east-1.amazonaws.com/threatdetail?id=',
      'https://3nusxmqtj2.execute-api.us-east-1.amazonaws.com/habitatdetail?id=',
      'https://3nusxmqtj2.execute-api.us-east-1.amazonaws.com/countrydetail?id='
    ]

    axios.get(apis[type] + id)
      .then(res => {
        this.setState({type: type, details: res.data.item});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    switch(this.state.type) {
      case '0':
        return <Animal item={this.state.details}/>;
      case '1':
        return <Threat item={this.state.details}/>;
      case '2':
        return <Habitat item={this.state.details}/>;
      case '3':
        return <Country item={this.state.details}/>;
      default:
        return null;
    }
  }
}
