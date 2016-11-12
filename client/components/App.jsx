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
   render() {
   
       var children = React.Children.map(this.props.children, function (child) {
         return React.cloneElement(child, {
           user: user
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
