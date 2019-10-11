import React from 'react';
import Home from './components/Home';
import Standard from '../src/components/Levels/Standard';
import Expert from './components/Levels/Expert';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <Router>
       <div>
         <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/standard" component={Standard}/>
         <Route path="/expert" component={Expert}/>
         <Route render={() => <h1>Page not found</h1>} />
       </Switch>
       </div>
       
       <div>
         <Link to="/">Home</Link> {' '}
         <Link to='/standard' >Standard</Link> {' '}
         <Link to='/expert'>Expert</Link> {' '}
       </div>

       
      </Router>
      

    
  );
 }
}

export default App;