import React, { Component } from 'react';
import './App.css';
import Sports from './Sports';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path='/' component={Sports} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
