import React from 'react';
import {Entity, Scene} from 'aframe-react'
import Setting from './setting.jsx'
// var extras = require('aframe-extras');
// extras.registerAll();


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      openVR: false
    }
  }

  exitVR(){
    this.setState({openVR: false});
  }

  render() {
    console.log(__dirname)
    if(this.state.openVR){
      return (<Setting exitVR={this.exitVR.bind(this)}/>)
    }
    
    return (
       <div>
        <div>
          Hello World!!!!!
        </div>
        <button onClick={()=>this.setState({openVR: true})}>Enter VR</button>
       </div>
    );
  }
}

export default App;
