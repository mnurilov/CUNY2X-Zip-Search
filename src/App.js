import React, { Component } from 'react';
import Request from './Request.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      requestedZip: 10002,
    }
  }

  updateZip = (event) => {
    // console.log(event);
    // let newZip = event.target.value;
    // console.log(event.target.value);
    this.setState({
      requestedZip: event.target.value,
    });
  }

  render() {
    return (
      <div className="main">
        <div >
        <input type="number" onChange={this.updateZip} defaultValue={this.state.requestedZip}/>
          <Request requestZip={this.state.requestedZip} />
        </div>
      </div>
    );
  }
}

export default App;
