import React from 'react';
import {
  NavLink, Switch, Route,
} from 'react-router-dom';

import PhonesPage from './components/PhonesPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

import './App.css';

const App = () => (
  <div className="App">
    <header className="header catalog__header">
      <div className="header_content">
        <NavLink exact to="/" className="header_logo">
          <img src="/img/logo.png" alt="shop logo" />
        </NavLink>
        <nav className="header_menu">
          <ul className="menu">
            <li className="menu__item">
              <NavLink
                exact
                to="/"
                className="menu__item-link"
                activeClassName="menu__item-link_active"
              >
                  Home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                exact
                to="/phones"
                className="menu__item-link"
                activeClassName="menu__item-link_active"
              >
                  Phones catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/phones" component={PhonesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
