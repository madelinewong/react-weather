import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
  <div>
    <h1> React Weather </h1>
    <p> Enter your latitude and longitude to get the weather!</p>
    <form>
      <label> 
        Latitude:
        <input type="text"/>
      </label>
      <label>
        Longitude: 
        <input type="text"/>
      </label>
      <button type="submit"> Get the Weather! </button>
    </form>
  </div>
    );
  }
}

export default App;
