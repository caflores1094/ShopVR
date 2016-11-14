import React from 'react';
import Navbar from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  render() {
    var context = this;
    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        user: ''
      });
    });

    return (
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    );
  }
}

export default App;
