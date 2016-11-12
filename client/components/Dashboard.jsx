import React from 'react';
import Feed from './Dash/Feed.jsx';
import QueryBox from './Dash/QueryBox.jsx';
import Social from './Dash/Social.jsx';

class Dashboard extends React.Component {
  constructor(props) {
      super(props);
  }

   render() {
      return (
        <div>
          <QueryBox user={this.props.user} store={this.props.store}/>
          <Feed store={this.props.store}/>
          <Social store={this.props.store}/>
        </div>
      );
   }
}

export default Dashboard;
