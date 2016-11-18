import React from 'react';
import {Entity, Scene} from 'aframe-react'

var fountainMaterial = 'color: grey; side: double; src: url(./lib/fountainMaterial.jpg);';

class Fountain extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  render() {
  
    return (
      <Entity>
        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder',  openEnded: true, radius: '2', height: 1.5, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + this.props.y + this.props.x} static-body/>
        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder',  openEnded: true, radius: '1.8', height: 1.5, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + this.props.y + this.props.x} static-body/>

        <Entity material={fountainMaterial} geometry={{primitive: 'ring',  openEnded: true, segmentsTheta: 360, radiusOuter: '2', radiusInner: '1.8', thetaLength: 360}} rotation='90 0 0' position={this.props.z + "0.75" + this.props.x} static-body/>

        <Entity material={fountainMaterial} geometry={{primitive: 'circle', radius: 2, thetaLength: 360}} position={this.props.z + "0.1" + this.props.x} rotation='-90 0 0' static-body/>
      </Entity>
    );
  }
}

export default Fountain;