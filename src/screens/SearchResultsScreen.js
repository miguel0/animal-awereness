import React from 'react';
import './SearchResultsScreen.css';
import { ListGroup } from "react-bootstrap";
const queryString = require('query-string');

export default class SearchResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        type: 0,
        text: '',
        results: null
    };
  }

  static type = ['Animals', 'Threats', 'Habitats', 'Countries'];

  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    this.setState(
      {
        type: parsed.type,
        text: parsed.text
      },
      () => {this.getResults()}
    );
  }

  getResults() {
    // TODO: get list of items from API
    console.log(this.state.type, this.state.text);
    let allItems = ['t e s t', 'testito', 'PRUEBA', 'prueb i t o'];

    let resultsArray = [];
    for(let i = 0; i < allItems.length; i++) {
      let newResult = allItems[i].toLowerCase().replace(/\s+/g, '');
      let newText = this.state.text.toLowerCase().replace(/\s+/g, '');

      if(newResult.includes(newText)) {
        resultsArray.push(allItems[i]);
      }
    }

    const results = resultsArray.map((item) =>
      <ListGroup.Item key={item} onClick={this.goToResult.bind(this, item)}>
        {item}</ListGroup.Item>
    );
    this.setState({results: results})
  }

  goToResult(name) {
    // TODO: go to page of result
    console.log('type: ', this.state.type, ' name: ', name);
  }

  render() {
    return (
      <div id="main">
        <h3>Results for "{this.state.text}":</h3>
        <ListGroup id="results">{this.state.results}</ListGroup>
      </div>
    );
  }
}