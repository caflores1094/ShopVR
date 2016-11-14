import React from 'react';
import {Entity, Scene} from 'aframe-react'
import Setting from './setting.jsx'
import ClothingArticle from './clothingArticle.jsx'


// var extras = require('aframe-extras');
// extras.registerAll();

var imageArr = ['url(./lib/testImages/navyDress.jpg)', 'url(./lib/testImages/purpleDress.jpg)', 'src: url(./lib/testImages/blackDress.jpg)']

var positions = [
  '7 1.5 14',
  '14 1.5 14',
  '14 1.5 10',
]

class ClothingMapper extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  render() {
  
    return (
      <Entity>
        {
          imageArr.map(function(url, i){
            console.log('INDEX', i)
            return <ClothingArticle position={positions[i]} src={url}/>
          }) 
        }
      </Entity>
      
    );
  }
        // <ClothingArticle position={'7 1.5 14'} src={imageArr[0]}/>
        // <ClothingArticle position={'14 1.5 14'} src={imageArr[1]}/>
}

export default ClothingMapper;
