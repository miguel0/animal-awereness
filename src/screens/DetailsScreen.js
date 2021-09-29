import React from 'react';

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
        name: ''
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    this.setState({type: parsed.type, name: parsed.name});
  }

  render() {
    switch(this.state.type) {
      case '0':
        return <Animal name={this.state.name}/>;
      case '1':
        return <Threat name={this.state.name}/>;
      case '2':
        return <Habitat name={this.state.name}/>;
      case '3':
        return <Country name={this.state.name}/>;
      default:
        return null;
    }
  }
}
