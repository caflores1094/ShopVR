import React from 'react';
import {Entity, Scene} from 'aframe-react'


class ClothingArticle extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showPrice: false
    }
  }

  clicked(){
    var flag = !this.state.showPrice;
    console.log('clicked!', flag)
    this.setState({
      showPrice: flag
    })
  }

  render() {
    var priceBoxPos = this.props.position.pos.slice().split(' ');
    priceBoxPos[1] = 1.5 + this.props.size*0.625 + 0.7;
    priceBoxPos = priceBoxPos.join(' ');

    var heartPos = this.props.position.pos.slice().split(' ');
    heartPos[1] = 1.5 + this.props.size*0.625 + 0.2;

    var textPos = this.props.position.pos.slice().split(' '); 
    if(this.props.position.rotation === '0 90 0'){
      textPos[2] = parseInt(textPos[2]) + 0.7
    } else if(this.props.position.rotation === '0 -90 0'){
      textPos[2] -= 0.625
    } else if (this.props.position.rotation === '0 180 0'){
      textPos[0] = parseInt(textPos[0]) + 0.625
    }
    else if (this.props.position.rotation === '0 0 0'){
      textPos[0] = parseInt(textPos[0]) - 0.625
    }
    textPos[1] = 1.5 + this.props.size*0.625 + 0.6;
    // textPos[2] += 0.3;
    console.log((textPos[2]))


        //<a-box mixin="plane" depth='0.1' height='1' width='1.25 ' position={priceBoxPos} opacity='0.3' look-at="[camera]">
        //  <a-animation attribute="scale" from="1 0 0" to="1 1 1" dur="750" delay="500" fill="backwards"></a-animation>
        //</a-box>
    return (
      <Entity>
        <Entity onClick={this.clicked.bind(this)} material={{src: `url(${this.props.src})`}} geometry={{primitive: 'box', depth: .1, height: this.props.size*1.25, width: 1.25}} rotation="0 0 0" position={this.props.position.pos} look-at="[camera]" static-body>
          <a-mouseenter scale='4 4 4'></a-mouseenter>
        </Entity>
        
        {this.state.showPrice ? <Entity bmfont-text={{align: 'left', text: this.props.brand + ': ' + this.props.price}} position={textPos} scale='1 1 1' rotation={this.props.position.rotation}>
                  <a-animation attribute="scale" from="1 0 1" to="1 1 1" dur="750" delay="500" fill="backwards"></a-animation>
                </Entity> : null}
        {this.state.showPrice ? <Entity material={{src: 'url(./lib/heart.png)', transparent: true}} geometry={{primitive: 'plane', height: .2, width: .35}} scale='1.5 1.5 1.5' rotation="0 0 0" position={heartPos} look-at="[camera]" static-body>
                  <a-animation attribute="scale" from="1.5 0 1.5" to="1.5 1.5 1.5" dur="750" delay="500" fill="backwards"></a-animation>
                  </Entity> : null}
      </Entity>
    )


    // if(this.state.showPrice){
    // return (
    //   <Entity>
    //     <Entity onClick={this.clicked.bind(this)} material={{src: `url(${this.props.src})`}} geometry={{primitive: 'box', depth: .1, height: this.props.size*1.25, width: 1.25}} rotation="0 0 0" position={this.props.position} look-at="[camera]" static-body/>
        
    //     <Entity bmfont-text={{text: 'HOLA MUNDO', width: 200, color: 'black'}} position={textPos} look-at="[camera]">
    //       <a-animation attribute="scale" from="1 0 0" to="1 1 1" dur="750" delay="500" fill="backwards"></a-animation>
    //     </Entity>
    //   </Entity>
    // );
    // }
    // else {
    //   return <Entity onClick={this.clicked.bind(this)} material={{src: `url(${this.props.src})`}} geometry={{primitive: 'box', depth: .1, height: this.props.size*5, width: 1.25}} rotation="0 0 0" position={this.props.position} look-at="[camera]" static-body/>
    // }
  }
}

export default ClothingArticle;
