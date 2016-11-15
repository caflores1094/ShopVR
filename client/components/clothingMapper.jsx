import React from 'react';
import {Entity, Scene} from 'aframe-react'
import ClothingArticle from './clothingArticle.jsx'


// var extras = require('aframe-extras');
// extras.registerAll();

// var imageArr = [
//   'url(./lib/testImages/navyDress.jpg)', 
//   'url(./lib/testImages/purpleDress.jpg)', 
//   'url(./lib/testImages/blackDress.jpg)',
//   'url(./lib/testImages/blackCoat.jpg)',
//   'url(./lib/testImages/blackCoat2.jpg)',
//   'url(./lib/testImages/tanCoat.jpg)',

//   'url(./lib/testImages/navyDress.jpg)', 
//   'url(./lib/testImages/purpleDress.jpg)', 
//   'url(./lib/testImages/blackDress.jpg)',
//   'url(./lib/testImages/blackCoat.jpg)',
//   'url(./lib/testImages/blackCoat2.jpg)',
//   'url(./lib/testImages/tanCoat.jpg)',

//   'url(./lib/testImages/navyDress.jpg)', 
//   'url(./lib/testImages/purpleDress.jpg)', 
//   'url(./lib/testImages/blackDress.jpg)',
//   'url(./lib/testImages/blackCoat.jpg)',
//   'url(./lib/testImages/blackCoat2.jpg)',
//   'url(./lib/testImages/tanCoat.jpg)',

//   'url(./lib/testImages/navyDress.jpg)', 
//   'url(./lib/testImages/purpleDress.jpg)', 
//   'url(./lib/testImages/blackDress.jpg)',
//   'url(./lib/testImages/blackCoat.jpg)',
//   'url(./lib/testImages/blackCoat2.jpg)',
//   'url(./lib/testImages/tanCoat.jpg)'
// ]

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

]

class ClothingMapper extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  render() {
    this.props.feed.length = 24;
    console.log(this.props.feed)
    return (
      <Entity>
        {
          this.props.feed.map(function(url, i){
            console.log('INDEX', i)
            return <ClothingArticle position={positions[i]} src={'url(' + url + ')'}/>
          }) 
        }
      </Entity>
    );
  }
}

export default ClothingMapper;
