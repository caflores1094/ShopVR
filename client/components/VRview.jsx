import React from 'react';
import Sharebar from './Sharebar.jsx';
import Setting from './setting.jsx';


class VRview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var context = this;
    var categories = {};
    this.props.feed.forEach((elem)=>{
      if(elem.categories[0].shortName in categories){
        categories[elem.categories[0].shortName].push(elem);
      } else{
        categories[elem.categories[0].shortName] = [elem]
      }
    });
    var firstFeed = [];
    for(var category in categories){
      categories[category].forEach((elem)=>{
        firstFeed.push(elem);
      })
    }
    console.log(firstFeed)

    var vrFeed = firstFeed.map((clothingObj)=> { 
        return( [clothingObj.image.sizes.IPhoneSmall.url, clothingObj.image.sizes.IPhoneSmall.actualHeight / clothingObj.image.sizes.IPhoneSmall.actualWidth, clothingObj.priceLabel])
      });
    return (
      <div>
        <Sharebar user={this.props.user}/>
        <Setting user={this.props.user} feed={vrFeed}/>
      </div>
    );
  }
}

export default VRview;
