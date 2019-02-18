import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';
import Error from './Error';
//import './styles/app.css'

export default class App extends Component {
  state = {
    results: [],
  }

  handleResults = (result) => {
    this.setState({results: result})
  }

  render() {
    return (
      <div className='App'>
        <header className="header" role="heading">
          <h1>Star Wars API Search</h1>
        </header>
        <main>
          <Error>
            <Search results={this.handleResults} />
            <Results results={this.state.results} />
          </Error>
        </main>
      </div>     
    );
  }
}