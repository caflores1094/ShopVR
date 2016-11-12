import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Dashboard from './components/Dashboard.jsx';
import Profile from './components/Profile.jsx';
import { createStore, combineReducers } from 'redux';

var userReducer = (state={}, action) => {
  switch(action.type) {
    case 'LOG_IN_USER':
      return Object.assign(state, action.user);
    case 'EDIT_USER':
      return Object.assign(state, action.user);
    default:
      return state;
  }
};

var feedReducer = (state=[], action) => {
  switch(action.type) {
    case 'UPDATE_FEED':
      return state.concat(action.feed);
    default:
      return state;
  }
};

var appReducers = combineReducers({
  user: userReducer,
  feed: feedReducer
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} store={createStore(appReducers)}>
      <IndexRoute component={Dashboard}/>
      <Route path="/profile" component={Profile}/>
    </Route>
  </Router>
), document.getElementById('app'))
