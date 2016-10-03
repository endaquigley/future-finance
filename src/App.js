import React, { Component } from 'react';
import { BrowserRouter, Match, Link } from 'react-router';
import Search from './Search';
import Result from './Result';
import './css/app.css';
import logo from './images/logo.svg';

class App extends Component {

  render() {
    return (
      <BrowserRouter basename="/sandbox/future-finance">
        <div>

          <header className="header">
            <Link to="/">
              <img className="header__logo" src={ logo } alt="Future Finance" />
            </Link>
          </header>

          <Match exactly pattern="/" component={ Search } />
          <Match pattern="/result/:id" component={ Result } />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
