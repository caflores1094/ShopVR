import React from 'react';
import {Entity, Scene} from 'aframe-react'
import ClothingArticle from './clothingArticle.jsx'

var positions = [
  '7 1.5 6',
  '7 1.5 9',
  '7 1.5 12',
  '16 1.5 12',
  '16 1.5 9',
  '16 1.5 6',

  '7 1.5 -6',
  '7 1.5 -9',
  '7 1.5 -12',
  '15 1.5 -12',
  '15 1.5 -9',
  '15 1.5 -6',

  '18 1.5 -6',
  '18 1.5 -9',
  '18 1.5 -12',
  '25 1.5 -12',
  '25 1.5 -9',
  '25 1.5 -6',

  '18 1.5 6',
  '18 1.5 9',
  '18 1.5 12',
  '25 1.5 12',
  '25 1.5 9',
  '25 1.5 6',

  '29 1.5 4.5',
  '29 1.5 8',
  '29 1.5 12',
  '32 1.5 12',
  '32 1.5 9',
  '32 1.5 6',
  '35 1.5 6',
  '35 1.5 9',
  '35 1.5 12',
  '38 1.5 12',
  '38 1.5 8',
  '38 1.5 4.5',
  '38 1.5 1.5',

  
  '29 1.5 -4.5',
  '29 1.5 -8',
  '29 1.5 -12',
  '32 1.5 -12',
  '32 1.5 -9',
  '32 1.5 -6',
  '35 1.5 -6',
  '35 1.5 -9',
  '35 1.5 -12',
  '38 1.5 -12',
  '38 1.5 -8',
  '38 1.5 -4.5',
  '38 1.5 -1.5',

  

  
  
]

var transformImageUrl = function transformImageUrl(url) {
  while (url.indexOf('/') >= 0) {
    url = url.replace('/', 'SLASH');//this is needed to transfer the url over http request
  }
  return '/api/getimage/' + url;
};

class ClothingMapper extends React.Component {

  constructor(props){
    super(props);

    var newfeed = [];
    for (var i =0; i < positions.length; i++) {
      if(i < this.props.feed.length){
        newfeed.push([ transformImageUrl(this.props.feed[i][0]), this.props.feed[i][1], this.props.feed[i][2] ]);
      }
    }

    this.state={
      feed: newfeed
    };
  }

  render() {
    var context = this;
    return (
      <Entity>
        {
          this.state.feed.map(function(arr, i){
            return <ClothingArticle key={i} position={positions[i]} price={arr[2]} src={arr[0]} size={arr[1]}/>
          })
        }
      </Entity>
    );
  }
}

export default ClothingMapper;
