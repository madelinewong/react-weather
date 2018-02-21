import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lat: 0,
      lon: 0,
    }; 
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
  }

  handleLatChange(e){
    this.setState({
      lat: +e.target.value
  })
}
  handleLonChange(e){
    this.setState({
      lon: +e.target.value
    })
  }
  render() {
    return (
  <div>
    <h1> React Weather </h1>
    <p> Enter your latitude and longitude to get the weather!</p>
    <form>
      <label> 
        Latitude:
        <input type="number" 
        min="-90"
        max="90"
        onChange={(e) => this.handleLatChange(e)} 
        value={this.state.lat}
        required/>
      </label>
      <label>
        Longitude: 
        <input type="number" 
        min="-180"
        max="180"
        onChange={(e) => this.handleLonChange(e)} 
        value={this.state.lon}
        required/>
      </label>
      <button type="submit"> Get the Weather! </button>
    </form>
  </div>
    );
  }
}

export default App;
