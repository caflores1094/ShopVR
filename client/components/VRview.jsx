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
    // console.log('first feed', firstFeed)

    var itemsForLike = firstFeed.map((item)=> {
      return {
        name: item.name,
        image: {
          sizes: {
            IPhoneSmall: {
              url: item.image.sizes.IPhoneSmall.url
            }
          }
        },
        price: item.price,
        clickUrl: item.clickUrl,
        userID: this.props.user.id

      }
    });

    // console.log('like items', itemsForLike);

    var vrFeed = firstFeed.map((clothingObj)=> { 
      var brand = clothingObj.retailer ? clothingObj.retailer.name : '-';
      if(brand.length > 18){
        brand = brand.substr(0,18);
      }
      return( [clothingObj.image.sizes.IPhone.url, clothingObj.image.sizes.IPhone.actualHeight / clothingObj.image.sizes.IPhone.actualWidth, clothingObj.priceLabel, brand])
      });
    return (
      <div>
        <Sharebar user={this.props.user}/>
        <Setting user={this.props.user} likeItems={itemsForLike} feed={vrFeed}/>
      </div>
    );
  }
}

export default VRview;
