import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Game} from "./Square";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <div>
          <Game/>
      </div>
    );
  }
}


export default App;
