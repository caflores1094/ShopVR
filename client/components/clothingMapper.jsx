import React from 'react';
import {Entity, Scene} from 'aframe-react'
import ClothingArticle from './clothingArticle.jsx'

var positions = [
  {pos: '7 1.5 6', rotation: '0 90 0'},
  {pos: '7 1.5 9', rotation: '0 90 0'},
  {pos: '7 1.5 12', rotation: '0 90 0'},
  {pos: '16 1.5 12', rotation: '0 -90 0'},
  {pos: '16 1.5 9', rotation: '0 -90 0'},
  {pos: '16 1.5 6', rotation: '0 -90 0'},

  {pos: '7 1.5 -6', rotation: '0 90 0'},
  {pos: '7 1.5 -9', rotation: '0 90 0'},
  {pos: '7 1.5 -12', rotation: '0 90 0'},
  {pos: '15 1.5 -12', rotation: '0 -90 0'},
  {pos: '15 1.5 -9', rotation: '0 -90 0'},
  {pos: '15 1.5 -6', rotation: '0 -90 0'},

  {pos: '18 1.5 -6', rotation: '0 90 0'},
  {pos: '18 1.5 -9', rotation: '0 90 0'},
  {pos: '18 1.5 -12', rotation: '0 90 0'},
  {pos: '25 1.5 -12', rotation: '0 -90 0'},
  {pos: '25 1.5 -9', rotation: '0 -90 0'},
  {pos: '25 1.5 -6', rotation: '0 -90 0'},

  {pos: '18 1.5 6', rotation: '0 90 0'},
  {pos: '18 1.5 9', rotation: '0 90 0'},
  {pos: '18 1.5 12', rotation: '0 90 0'},
  {pos: '25 1.5 12', rotation: '0 -90 0'},
  {pos: '25 1.5 9', rotation: '0 -90 0'},
  {pos: '25 1.5 6', rotation: '0 -90 0'},

  {pos: '29 1.5 4.5', rotation: '0 90 0'},
  {pos: '29 1.5 8', rotation: '0 90 0'},
  {pos: '29 1.5 12', rotation: '0 90 0'},
  {pos: '32 1.5 12', rotation: '0 180 0'},
  {pos: '32 1.5 9', rotation: '0 180 0'},
  {pos: '32 1.5 6', rotation: '0 180 0'},
  {pos: '35 1.5 6', rotation: '0 180 0'},
  {pos: '35 1.5 9', rotation: '0 180 0'},
  {pos: '35 1.5 12', rotation: '0 180 0'},
  {pos: '38 1.5 12', rotation: '0 -90 0'},
  {pos: '38 1.5 8', rotation: '0 -90 0'},
  {pos: '38 1.5 4.5', rotation: '0 -90 0'},
  {pos: '38 1.5 1.5', rotation: '0 -90 0'},
  
  {pos: '29 1.5 -4.5', rotation: '0 90 0'},
  {pos: '29 1.5 -8', rotation: '0 90 0'},
  {pos: '29 1.5 -12', rotation: '0 90 0'},
  {pos: '32 1.5 -12', rotation: '0 0 0'},
  {pos: '32 1.5 -9', rotation: '0 0 0'},
  {pos: '32 1.5 -6', rotation: '0 0 0'},
  {pos: '35 1.5 -6', rotation: '0 0 0'},
  {pos: '35 1.5 -9', rotation: '0 0 0'},
  {pos: '35 1.5 -12', rotation: '0 0 0'},
  {pos: '38 1.5 -12', rotation: '0 -90 0'},
  {pos: '38 1.5 -8', rotation: '0 -90 0'},
  {pos: '38 1.5 -4.5', rotation: '0 -90 0'},
  {pos: '38 1.5 -1.5', rotation: '0 -90 0'}
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
        newfeed.push([ transformImageUrl(this.props.feed[i][0]), this.props.feed[i][1], this.props.feed[i][2], this.props.feed[i][3] ]);
      }
    }

    this.state={
      feed: newfeed
    };
  }

  render() {
    var context = this;
    // console.log('props feed!', this.props.feed)
    return (
      <Entity>
        {
          this.state.feed.map(function(arr, i){
            return <ClothingArticle key={i} likeItem={context.props.likeItems[i]} position={positions[i]} price={arr[2]} src={arr[0]} brand={arr[3]} size={arr[1]}/>
          })
        }
      </Entity>
    );
  }
}

export default ClothingMapper;
