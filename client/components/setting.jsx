import React from 'react';
import {Entity, Scene} from 'aframe-react'
import ClothingMapper from './clothingMapper.jsx'
// var extras = require('aframe-extras');
// extras.registerAll();

var dimensions = {
  fullLength: 50,
  fullWidth: 40,
  frontGrassLength: 10,
  sideGrassesLength: 35,
  sideGrassesWidth: 5,
  sideGrassX: 22.5,
  sideGrassZ: 17.5,
  backGrassZ: 42.5,
  grassMaterial: 'src: url(./lib/grass.jpg); repeat: 25 25',
  sidefenceLength: 50,
  backFenceLength: 40,
  fenceHeight: 2,
  wallHeight: 4,
  sideWallLength: 35,
  backWallLength: 30,
  mallMaterial: 'color: grey',
  ceilingMaterial: 'color: grey',
  fenceColor: 'grey',
  entranceSides: 13,
  ceilingWidth: 30,
  ceilingLength: 35
}

class Setting extends React.Component {

  constructor(props){
    super(props);
  }
  render() {
      return(
        <div>
          <Scene physics>
            <Entity id="camera" active camera position="0 1.8 0" rotation="0 0 0" universal-controls kinematic-body jump-ability="maxJumps: 100;">
              <Entity cursor="maxDistance: 30"
                    position="0 0 -1"
                    geometry="primitive: ring; radiusOuter: 0.007; radiusInner: 0.004;"
                    material="color: black; shader: flat" >
              </Entity>
            </Entity>

            <Entity
              geometry={{primitive: 'sphere', radius: 100}}
              material={{shader: 'flat', src: "url(./lib/skybox.jpg)"}}
              scale="1 1 -1"
              position= '0 0 0'
            />

            <Entity material={dimensions.grassMaterial} geometry={{primitive: 'plane', height: dimensions.frontGrassLength, width: dimensions.fullWidth}} rotation="-90 90 0" position="0 0 0" static-body/>
            <Entity material={dimensions.grassMaterial} geometry={{primitive: 'plane', height: dimensions.sideGrassesWidth, width: dimensions.fullWidth}} rotation="-90 90 0" position={dimensions.backGrassZ+ "0 0"} static-body/>
            <Entity material={dimensions.grassMaterial} geometry={{primitive: 'plane', height: dimensions.sideGrassesWidth, width: dimensions.sideGrassesLength}} rotation="-90 0 0" position="22.5 0 17.5" static-body/>
            <Entity material={dimensions.grassMaterial} geometry={{primitive: 'plane', height: dimensions.sideGrassesWidth, width: dimensions.sideGrassesLength}} rotation="-90 0 0" position="22.5 0 -17.5" static-body/>

            <Entity material={'color:' + dimensions.fenceColor} geometry={{primitive: 'plane', height: dimensions.fenceHeight, width: dimensions.sidefenceLength}} rotation="0 0 0" position="20 1 -20" static-body/>
            <Entity material={'color:' + dimensions.fenceColor} geometry={{primitive: 'plane', height: dimensions.fenceHeight, width: dimensions.sidefenceLength}} rotation="0 -180 0" position="20 1 20" static-body/>
            <Entity material={'color:' + dimensions.fenceColor} geometry={{primitive: 'plane', height: dimensions.fenceHeight, width: dimensions.backFenceLength}} rotation="0 90 0" position="-5 1 0" static-body/>
            <Entity material={'color:' + dimensions.fenceColor} geometry={{primitive: 'plane', height: dimensions.fenceHeight, width: dimensions.backFenceLength}} rotation="0 -90 0" position="45 1 0" static-body/>


            <Entity material= {dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.sideWallLength}} rotation="0 0 0" position="22.5 2 -15" static-body/>
            <Entity material= {dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.sideWallLength}} rotation="0 -180 0" position="22.5 2 -15" static-body/>

            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.sideWallLength}} rotation="0 0 0" position="22.5 2 15" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.sideWallLength}} rotation="0 -180 0" position="22.5 2 15" static-body/>

            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.backWallLength}} rotation="0 90 0" position="40 2 0" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.backWallLength}} rotation="0 -90 0" position="40 2 0" static-body/>

            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.entranceSides}} rotation="0 -90 0" position="5 2 -8.5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.entranceSides}} rotation="0 -90 0" position="5 2 8.5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.entranceSides}} rotation="0 90 0" position="5 2 -8.5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.entranceSides}} rotation="0 90 0" position="5 2 8.5" static-body/>

            <Entity material={dimensions.ceilingMaterial} geometry={{primitive: 'box', depth: '.5', height: dimensions.ceilingLength, width: dimensions.ceilingWidth}} rotation="90 90 0" position="22.5 4.25 0" static-body/>
            <Entity material={'color: grey'} geometry={{primitive: 'plane', height: dimensions.ceilingLength, width: dimensions.ceilingWidth}} rotation="-90 90 0" position="22.5 0 0" static-body/>

            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 90 0" position="16 2 10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 -90 0" position="16 2 10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 90 0" position="16 2 -10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 -90 0" position="16 2 -10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 90 0" position="25 2 -10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 -90 0" position="25 2 -10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 90 0" position="25 2 10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 -90 0" position="25 2 10" static-body/>


            <ClothingMapper />

          </Scene>
        </div>
      )
    }

}

export default Setting;
