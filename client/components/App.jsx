import React from 'react';
import Navbar from './Navbar.jsx';

var user = {
  username: 'Victor',
  email: 'fake@gmail',
  gender: 'male',
  lowprice: '10',
  highprice: '20'
};


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var context = this;
    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        user: user,
        store: context.props.route.store
      });
    });

    return (
      <div>
        <Navbar store={this.props.route.store}/>
        <div>{children}</div>
      </div>
    );
  }
}

export default App;
