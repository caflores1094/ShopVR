import React from 'react';
import Feed from './Dash/Feed.jsx';
import QueryBox from './Dash/QueryBox.jsx';
import Social from './Dash/Social.jsx';

class Dashboard extends React.Component {
   render() {
      return (
        <div>
          <QueryBox />
          <Feed />
          <Social />
        </div>
      );
   }
}

export default Dashboard;
