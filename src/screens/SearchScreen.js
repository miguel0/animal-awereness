import React from 'react';
import './SearchScreen.css';
import { DropdownButton, Dropdown, Form, Button } from 'react-bootstrap';

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        type: 0
    };

    this.updateType = this.updateType.bind(this);
  }

  static type = ['Animals', 'Threats', 'Habitats', 'Countries'];

  updateType(type) {
    type = parseInt(type); 
    this.setState({type: type});
  }

  search() {
    let type = this.state.type;
    let text = document.getElementById('searchInput').value
    console.log(type, text);
  }

  render() {
    return (
      <div id="main">
        <div id="dropAndSearch">
          <DropdownButton
            id="dropdown"
            title={SearchScreen.type[this.state.type]}
            onSelect={this.updateType}
          >
            <Dropdown.Item eventKey="0">Animals</Dropdown.Item>
            <Dropdown.Item eventKey="1">Threats</Dropdown.Item>
            <Dropdown.Item eventKey="2">Habitats</Dropdown.Item>
            <Dropdown.Item eventKey="3">Countries</Dropdown.Item>
          </DropdownButton>
          <Form.Group controlId="searchInput">
            <Form.Control placeholder="Type something..." />
          </Form.Group>
        </div>
        <Button id="searchButton" onClick={this.search.bind(this)}>Search</Button>
      </div>
    );
  }
}