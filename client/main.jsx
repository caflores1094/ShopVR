import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Dashboard from './components/Dashboard.jsx';
import Profile from './components/Profile.jsx';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="/a" component={Dashboard}/>
      <Route path="/b" component={Profile}/>
    </Route>
  </Router>
), document.getElementById('app'))
