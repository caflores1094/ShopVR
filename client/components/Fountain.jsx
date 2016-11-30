import React from 'react';
import {Entity, Scene} from 'aframe-react'

var fountainMaterial = 'side: double; src: url(./lib/fountainMaterial.jpg);';

var largeArr = [];
var count = 0;
while(count !== 20){
  largeArr.push(10*count);
  count++;
}

var waterColor = '#42c0ff';

class Fountain extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      
    }
  }

// <Entity material={fountainMaterial} geometry={{primitive: 'sphere', radius: '1', thetaLength: 50}} rotation='0 0 0' position={this.props.z + 3 + this.props.x} rotation="180 0 0" scale="1 1 -1"/>
        // <Entity material={fountainMaterial} geometry={{primitive: 'cylinder', radius: '1', height: 0.1, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + "1.55" + this.props.x}/>        

  render() {
    var context = this;
    return (
      <Entity>
        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder',  openEnded: true, radius: '2', height: 1.5, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + this.props.y + this.props.x} />
        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder',  openEnded: true, radius: '1.8', height: 1.5, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + this.props.y + this.props.x}/>

        <Entity material={fountainMaterial} geometry={{primitive: 'ring',  openEnded: true, segmentsTheta: 360, radiusOuter: '2', radiusInner: '1.8', thetaLength: 360}} rotation='90 0 0' position={this.props.z + "0.75" + this.props.x}/>

        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder', radius: '0.25', height: 1.3, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + "0.65" + this.props.x}/>        
        <Entity material={fountainMaterial} geometry={{primitive: 'sphere', radius: '2.5', thetaLength: 30}} rotation='0 0 0' position={this.props.z + '3.79' + this.props.x} rotation="180 0 0"/>        

        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder', radius: '0.2', height: 0.9, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + "1.9" + this.props.x}/>        
        <Entity material={fountainMaterial} geometry={{primitive: 'sphere', radius: '2.5', thetaLength: 20}} rotation='0 0 0' position={this.props.z + '4.85' + this.props.x} rotation="180 0 0"/>        

        <Entity material={fountainMaterial} geometry={{primitive: 'cylinder', radius: '0.15', height: 0.6, segmentsHeight: 18, segmentsRadial: 360, thetaLength: 360}} rotation='0 0 0' position={this.props.z + "2.65" + this.props.x}/>        
        <Entity material={fountainMaterial} geometry={{primitive: 'sphere', radius: '2.5', thetaLength: 12}} rotation='0 0 0' position={this.props.z + '5.45' + this.props.x} rotation="180 0 0"/>        
        <Entity material={fountainMaterial} geometry={{primitive: 'icosahedron', radius: '0.25'}} rotation='0 0 0' position={this.props.z + '3.23' + this.props.x} rotation="180 0 0"/>        
        
        <Entity material={{color: waterColor, opacity: 0.6}} geometry={{primitive: 'circle', radius: 2, thetaLength: 360}} position={this.props.z + "0.4" + this.props.x} rotation='-90 2 0' />
        <Entity material={{color: waterColor, opacity: 0.6}} geometry={{primitive: 'circle', radius: 0.8, thetaLength: 360}} position={this.props.z + "1.48" + this.props.x} rotation='-90 2 0' />
        <Entity material={{color: waterColor, opacity: 0.6}} geometry={{primitive: 'circle', radius: 0.5, thetaLength: 360}} position={this.props.z + "2.4" + this.props.x} rotation='-90 2 0' />
        <Entity material={{color: waterColor, opacity: 0.6}} geometry={{primitive: 'circle', radius: 0.3, thetaLength: 360}} position={this.props.z + "2.99" + this.props.x} rotation='-90 2 0' />


        {largeArr.map((num) => (
          <a-entity position={context.props.z + '3.0' + context.props.x}>
          <a-sphere radius='.03' color={waterColor} opacity='0.6' position="0 0.4 0"></a-sphere>
          <a-animation attribute="rotation"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       to="80 0 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
        </a-entity>
        ))}
        {largeArr.map((num) => (
          <a-entity position={context.props.z + '3.0' + context.props.x}>
          <a-sphere radius='.03' color={waterColor} opacity='0.6' position="0 0.4 0"></a-sphere>
          <a-animation attribute="rotation"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       to="-80 0 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
        </a-entity>
        ))}
        {largeArr.map((num) => (
          <a-entity position={context.props.z + '3.0' + context.props.x}>
          <a-sphere radius='.03' color={waterColor} opacity='0.6' position="0 0.4 0"></a-sphere>
          <a-animation attribute="rotation"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       to="0 0 80"
                       easing='linear'
                       repeat="indefinite"></a-animation>
        </a-entity>
        ))}
        {largeArr.map((num) => (
          <a-entity position={context.props.z + '3.0' + context.props.x}>
          <a-sphere radius='.03' color={waterColor} opacity='0.6' position="0 0.4 0"></a-sphere>
          <a-animation attribute="rotation"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       to="0 0 -80"
                       easing='linear'
                       repeat="indefinite"></a-animation>
        </a-entity>
        ))}



        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="33.51 2.97 0">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="33.51 2.97 0"
                       to="33.51 2.52 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="32.49 2.97 0">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="32.49 2.97 0"
                       to="32.49 2.52 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="33 2.97 0.51">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="33 2.97 0.51"
                       to="33 2.52 0.51"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="33 2.97 -0.51">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="33 2.97 -0.51"
                       to="33 2.52 -0.51"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}




        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="33.85 2.52 0">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="33.85 2.52 0"
                       to="33.85 1.62 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="32.15 2.52 0">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="32.15 2.52 0"
                       to="32.15 1.62 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="33 2.52 0.85">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="33 2.52 0.85"
                       to="33 1.62 0.85"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="33 2.52 -0.85">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="33 2.52 -0.85"
                       to="33 1.62 -0.85"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}


        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="34.24 1.62 0">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="34.24 1.62 0"
                       to="34.24 0 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="31.76 1.62 0">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="31.76 1.62 0"
                       to="31.76 0 0"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="33 1.62 1.24">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="33 1.62 1.24"
                       to="33 0 1.24"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="33 1.62 -1.24">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="33 1.62 -1.24"
                       to="33 0 -1.24"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="33.87 1.62 -0.87">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="33.87 1.62 -0.87"
                       to="33.87 0 -0.87"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="32.13 1.62 -0.87">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="32.13 1.62 -0.87"
                       to="32.13 0 -0.87"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="33.87 1.62 0.87">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="33.87 1.62 0.87"
                       to="33.87 0 0.87"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
        {largeArr.map((num) => (
          <a-sphere radius='.04' color={waterColor} opacity='0.6' position="32.13 1.62 0.87">
          <a-animation attribute="position"
                       dur="900"
                       begin={num}
                       fill="forwards"
                       from="32.13 1.62 0.87"
                       to="32.13 0 0.87"
                       easing='linear'
                       repeat="indefinite"></a-animation>
          </a-sphere>
        ))}
       

        

      </Entity>
    );
  }
}



export default Fountain;