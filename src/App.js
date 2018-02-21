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
        <input type="text" 
        onChange={(e) => this.handleLatChange(e)} 
        value={this.state.lat}/>
      </label>
      <label>
        Longitude: 
        <input type="text" 
        onChange={(e) => this.handleLonChange(e)} 
        value={this.state.lon}/>
      </label>
      <button type="submit"> Get the Weather! </button>
    </form>
  </div>
    );
  }
}

export default App;
