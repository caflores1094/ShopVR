import React from 'react';
import Navbar from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      feed: []
    };
  }

  setUser(user) {
    this.setState({user: user});
  }

  setFeed(feed) {
    this.setState({feed: feed});
  }

  render() {
    var context = this;
    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        user: context.state.user,
        setFeed: context.setFeed.bind(context),
        feed: context.state.feed
      });
    });

    if (this.state.user.hasOwnProperty('name')) {
      return (
        <div>
          <Navbar user={this.state.user} setUser={this.setUser.bind(this)}/>
          <div>{children}</div>
        </div>
      );
    } else {
      return (
         <div>
           <Navbar user={this.state.user} setUser={this.setUser.bind(this)}/>
           <h1>Why use our app?</h1>
           <h3>Enter Your Preferences</h3>
           <h3>Browse Your Recommendations</h3>
           <h3>Shop in Virtual Reality (w/ Friends)</h3>
         </div>
      );
    }
  }
}

export default App;
