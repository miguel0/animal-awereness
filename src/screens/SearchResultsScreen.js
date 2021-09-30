import React from 'react';
import './SearchResultsScreen.css';
import axios from 'axios';
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
    const apis = [
      'https://3nusxmqtj2.execute-api.us-east-1.amazonaws.com/endangeredAnimals',
      'https://3nusxmqtj2.execute-api.us-east-1.amazonaws.com/threats',
      'https://3nusxmqtj2.execute-api.us-east-1.amazonaws.com/habitats',
      'https://3nusxmqtj2.execute-api.us-east-1.amazonaws.com/countries'
    ];
    
    axios.get(apis[this.state.type])
      .then(res => {
        let allItems = res.data.items;

        let resultsArray = [];
        for(let i = 0; i < allItems.length; i++) {
          let newResult = allItems[i].name.toLowerCase().replace(/\s+/g, '');
          let newText = this.state.text.toLowerCase().replace(/\s+/g, '');

          if(newResult.includes(newText)) {
            resultsArray.push(allItems[i]);
          }
        }

        const results = resultsArray.map((item) =>
          <ListGroup.Item className="relatedItem" key={item.id} action onClick={this.goToResult.bind(this, item)}>
            {item.name}</ListGroup.Item>
        );
        this.setState({results: results})
      })
      .catch(error => {
        console.log(error);
      });
  }

  goToResult(item) {
    window.location.href = '/details?type=' + this.state.type + '&id=' + item.id;
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
