import React from 'react';
const queryString = require('query-string');

export default class DetailsScreen extends React.Component {
  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    console.log(parsed.type, parsed.name);
  }

  render() {
    return (
      <div>
        <p>DETALS SCREEN</p>
      </div>
    );
  }
}