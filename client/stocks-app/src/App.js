/*jshint esversion: 6 */ 

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }


  async callApi(){
    const response = await fetch('/user/stocks/1');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  }

  render()
  {

    var test = 'test_ee';

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Watch Debt Accumulate in Realtime.
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {test}
          </a> */}

          <div className="App-main-body">
            <div>
              <form action="./stocks" method="GET">
                  <input id="ticker" type="text" name="stock" placeholder="Add a stock to the watchlist"/>
                  <button id="button" type="submit">Add Stonk</button>
              </form>
              <ul>
                  <li>Stock 1</li>
                  <li>Stock 1</li>
                  <li>Stock 1</li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
