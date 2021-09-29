import React from 'react';

export default class SearchScreen extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
        
  //   };
  // }

  test() {
    window.location.href = '/animal';
  }

  render() {
    return (
      <div>
        <p>BUENAS</p>
        <button onClick={this.test.bind(this)}>a</button>
      </div>
    );
  }
}