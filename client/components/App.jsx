import React from 'react';
import {Entity, Scene} from 'aframe-react'
import Setting from './setting.jsx'
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

    this.state = {
      openVR: false
    }
  }

  exitVR(){
    this.setState({openVR: false});
  }

  render() {
    var context = this;
    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        user: user,
        store: context.props.route.store
      });
    });

    if(this.state.openVR){
      return (<Setting exitVR={this.exitVR.bind(this)}/>)
    }

    return (
      <div>
        <Navbar store={this.props.route.store}/>
        <button onClick={()=>this.setState({openVR: true})}>Enter VR</button>
        <div>{children}</div>
      </div>
    );
  }
}

export default App;
