import React from 'react';
import {Entity, Scene} from 'aframe-react';
import axios from 'axios';



class ClothingArticle extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showPrice: false
    }
  }

  clicked(){
    var flag = !this.state.showPrice;
    // console.log('clicked!', flag)
    this.setState({
      showPrice: flag
    })
  }

  heartClick(){
    console.log('liking item ');
    var item = this.props.likeItem;
    axios.post('/api/like', item)
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('Error liking', error);
      });
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
    
    return (
      <Entity>
        <Entity onClick={this.clicked.bind(this)} material={{src: `url(${this.props.src})`}} geometry={{primitive: 'box', depth: .1, height: this.props.size*1.25, width: 1.25}} rotation="0 0 0" position={this.props.position.pos} look-at="[camera]" static-body>
          <a-mouseenter scale='4 4 4'></a-mouseenter>
        </Entity>
        
        {this.state.showPrice ? <Entity bmfont-text={{align: 'left', text: this.props.brand + ': ' + this.props.price}} position={textPos} scale='1 1 1' rotation={this.props.position.rotation}>
                  <a-animation attribute="scale" from="1 0 1" to="1 1 1" dur="750" delay="500" fill="backwards"></a-animation>
                </Entity> : null}
        {this.state.showPrice ? <Entity onClick={this.heartClick.bind(this)} material={{src: 'url(./lib/heart.png)', transparent: true}} geometry={{primitive: 'plane', height: .2, width: .35}} scale='1.5 1.5 1.5' rotation="0 0 0" position={heartPos} look-at="[camera]" static-body>
                  <a-animation attribute="scale" from="1.5 0 1.5" to="1.5 1.5 1.5" dur="750" delay="500" fill="backwards"></a-animation>
                  <a-animation begin='click' attribute="scale" from="1.5 1.5 1.5" to="2 2 2" dur="400" delay="0" fill="backwards"></a-animation>
                  </Entity> : null}
      </Entity>
    )

  }
}

export default ClothingArticle;
