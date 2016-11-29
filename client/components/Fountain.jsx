import React from 'react';
import {Entity, Scene} from 'aframe-react'

var fountainMaterial = 'color: grey; side: double; src: url(./lib/fountainMaterial.jpg);';

var largeArr = [];
var count = 0;
while(count !== 50){
  largeArr.push(10*count);
  count++;
}

class Fountain extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  render() {
  
    return (
      <Entity>
        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder',  openEnded: true, radius: '2', height: 1.5, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + this.props.y + this.props.x} />
        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder',  openEnded: true, radius: '1.8', height: 1.5, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + this.props.y + this.props.x}/>

        <Entity material={fountainMaterial} geometry={{primitive: 'ring',  openEnded: true, segmentsTheta: 360, radiusOuter: '2', radiusInner: '1.8', thetaLength: 360}} rotation='90 0 0' position={this.props.z + "0.75" + this.props.x}/>

        <Entity material={fountainMaterial} geometry={{primitive: 'circle', radius: 2, thetaLength: 360}} position={this.props.z + "0.1" + this.props.x} rotation='-90 0 0' />

        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder', radius: '0.2', height: 1.5, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + 0.75 + this.props.x}/>        
        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder', radius: '0.5', height: 0.1, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + 1.6 + this.props.x}/>        

        {largeArr.map((num) => (
          <a-entity>
          <a-sphere radius='.04' color='#42c0ff' position="0 1.7 0"></a-sphere>
          <a-animation attribute="rotation"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       to="90 0 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
        </a-entity>
        ))}
        {largeArr.map((num) => (
          <a-entity>
          <a-sphere radius='.04' color='#42c0ff' position="0 1.7 0"></a-sphere>
          <a-animation attribute="rotation"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       to="-90 0 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
        </a-entity>
        ))}
        {largeArr.map((num) => (
          <a-entity>
          <a-sphere radius='.04' color='#42c0ff' position="0 1.7 0"></a-sphere>
          <a-animation attribute="rotation"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       to="0 0 90"
                       easing='linear'
                       repeat="indefinite"></a-animation>
        </a-entity>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color='#42c0ff' position="0 1.7 0.5">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="0 1.7 0"
                       to="0 0 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}

      </Entity>
    );
  }
}

export default Fountain;