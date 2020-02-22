/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './movieTtl.gif';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
    <div className='App'>
      <header className='App-header'>
        <Link to='/'>
          <img src={logo} className='App-logo' alt='logo' />
        </Link>
      </header>
      <Switch>
        <Route exact path='/' component={MoviesList} />
        <Route path='/:id' component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

const Test = ({ match }) => <h1>{match.params.id}</h1>;

export default App;
