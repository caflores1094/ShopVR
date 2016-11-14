import React from 'react';
import {Entity, Scene} from 'aframe-react'

class CashierCounter extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  render() {
  
    return (
      <Entity>
        <Entity material={'color: white'} geometry={{primitive: 'box', depth: '1', height: 1.6, width: 3.5}} rotation="0 0 0" position={this.props.position[0]} static-body/>
        <Entity material={'color: black'} geometry={{primitive: 'box', depth: '0.05', height: 0.5, width: 0.3}} rotation="90 90 0" position={this.props.position[1]} static-body/>
        <Entity material={'color: black'} geometry={{primitive: 'cylinder', radius: '0.03', height: 0.1}} rotation="0 0 0" position={this.props.position[2]} static-body/>
        <Entity material={'color: black'} geometry={{primitive: 'box', depth: '0.05', height: 0.7, width: 0.8}} rotation="0 0 0" position={this.props.position[3]} static-body/>
      </Entity>
    );
  }
}

export default CashierCounter;