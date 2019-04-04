import React, { Component } from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer';
import PizzaDetailsContainer from './components/PizzaDetailsContainer';
import AddPizzaFormContainer from './components/AddPizzaFormContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PizzaListContainer />
          <PizzaDetailsContainer />
          <AddPizzaFormContainer />
        </header>
      </div>
    );
  }
}

export default App;
