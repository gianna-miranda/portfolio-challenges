import React from 'react';
import './App.css';
import Input from './components/Input';


class App extends React.Component {
    state = {
      value: [''],
      HighScore: '',
      timesGuessed: '',
      randomStandard: '',
  
  
    }
  
   generateStandard = () => {
    const randomStandard = Math.floor(Math.random() *10)+ 1;
    this.setState({randomStandard})
    console.log(this.state)
  }
  
  
  handleChange = (event) => {
    this.setState({value:event.target.value})
    
  }
  
  componentDidMount (){
    //this.generateStandard();
  }
  
  submitButton = (event) => {
    var Input = parseInt(this.state.value);
    console.log(Input)
    console.log(this.state.randomStandard)
    event.preventDefault();
    if (Input < this.state.randomStandard) {
      alert("Your Number is too low!")
    }else if (Input > this.state.randomStandard){
      alert("Your number is too high")
    }else if (Input === this.state.randomStandard) {
      alert("You won!")
    }
  
    
  }
  
    render() {
      
    return (
      <div className="App">
      <header className="App-header">
        <h1>Contact List</h1>
      </header>
      <button onClick={this.generateStandard}>New Game</button>
      <button className="call" onClick={this.generateStandard}>Standard</button>
      <button className="called">Expert</button>
      <form onSubmit= {this.handleSubmit}>
                  <label>
                <input type="text" 
                     placeholder="Enter number" value={this.state.value} 
               onChange={(event) => {
                 console.log(event.target.value)
                 console.log(event)
                 this.handleChange(event)}}/>
  
              </label>
              <Input submitButton={this.submitButton} />
           <p>HighScore: </p>
            <p>Guesses: </p>
        <p>You Guess: {this.state.value}</p>
     
                  
    </form>
      
    </div>
  );
  
    }
  }
  

  
  export default App;