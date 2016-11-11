import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './components/App.jsx';



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />

  </Router>
), document.getElementById('app'))
