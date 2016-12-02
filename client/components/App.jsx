import React from 'react';
import Navbar from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      feed: [],
      price: true,
      brand: true,
      category: true,
      feedType: 'default',
      offset: 0,
      queryParams: null
    };
  }

  setUser(user) {
    this.setState({user: user});
  }

  setFeed(feed, feedType, queryParams, minPrice, maxPrice) {
    minPrice = minPrice || 0;
    maxPrice = maxPrice || 10000;
    //every time setFeed is called with new feedType, reset offset to 0
      //if setFeed is called with same feedType, increment offset by 50
    if (feedType === this.state.feedType) {
      var newOffset = this.state.offset + 50;
      this.setState({offset: newOffset});
    } else {
      this.setState({offset: 0, feedType: feedType});
    }

    var newfeed = [];
    for (var i = 0; i < feed.length; i++) {
      //check if the user's sizes are in stock...sizing format is extremely inconsistent
      //will need regex for this...tabling this feature for now
      // feed[i].stock.forEach(function(stockItem) {
      //   console.log(stockItem, 'stockitem');
      //   var size = stockItem.size.name;
      // })
      if (feed[i].price >= minPrice && feed[i].price <= maxPrice) {
        newfeed.push(feed[i]);
      }
    }
    this.setState({feed: newfeed, queryParams: queryParams});

  }

  sortPrice() {
    var context = this;
    this.setState({price: !this.state.price});
    this.state.feed.sort(function(a,b) {
      if (context.state.price)
        return a.price - b.price;
      else
        return b.price - a.price;
    });
  }

  sortBrand() {
    var context = this;
    this.setState({brand: !this.state.brand});
    this.state.feed.sort(function(a,b) {
      if (context.state.brand) {
        if (a.retailer.name < b.retailer.name) {
          return -1;
        }
        if (a.retailer.name > b.retailer.name) {
          return 1;
        }
        return 0;
      } else {
        if (a.retailer.name < b.retailer.name) {
          return 1;
        }
        if (a.retailer.name > b.retailer.name) {
          return -1;
        }
        return 0;
      }
    });
  }

  sortCat() {
    var context = this;
    this.setState({category: !this.state.category});
    this.state.feed.sort(function(a,b) {
      if (context.state.category) {
        if (a.categories[0].name < b.categories[0].name) {
          return -1;
        }
        if (a.categories[0].name > b.categories[0].name) {
          return 1;
        }
        return 0;
      } else {
        if (a.categories[0].name < b.categories[0].name) {
          return 1;
        }
        if (a.categories[0].name > b.categories[0].name) {
          return -1;
        }
        return 0;
      }
    });
  }

  render() {
    var context = this;
     // console.log(this.state.feedType, 'feedType getting passed');
    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        user: context.state.user,
        setFeed: context.setFeed.bind(context),
        sortBrand: context.sortBrand.bind(context),
        sortCat: context.sortCat.bind(context),
        sortPrice: context.sortPrice.bind(context),
        feed: context.state.feed,
        feedType: context.state.feedType,
        queryParams: context.state.queryParams
      });
    });

    if (this.state.user.hasOwnProperty('name') || (this.props.location.pathname.slice(1) !== '' && Number(this.props.location.pathname.slice(1)) % 1 === 0)) {
      return (
        <div>
          <Navbar user={this.state.user} setUser={this.setUser.bind(this)}/>
          <div>{children}</div>
        </div>
      );
    } else {
      return (
        <div>
          <a className="top">
            <Navbar user={this.state.user} setUser={this.setUser.bind(this)}/>
          </a>
          <div className="landing-hero">
            <div className="hero-text">
            </div>
          </div>
          <div className="landing-border">
            <div className="landing-border-text">
              Get started in 3 steps:
            </div>
          </div>
          <div className="landing">
            <div className="landing-box">
              <div className="marketing-title">
                Tell us about your style and favorites
                <img className="Gif" src="https://i.imgflip.com/1f68br.gif" title="made at imgflip.com"/>
              </div>
            </div>
            <div className="landing-box">
              <div className="marketing-title">
                Browse your recommendations
                <img className="Gif" src="https://i.imgflip.com/1f66qg.gif" title="Feed Demo"/>
              </div>
            </div>
            <div className="landing-box">
              <div className="marketing-title">
                <p>Shop with friends in virtual reality</p>
                <img className="Gif" src="https://i.imgflip.com/1f62g7.gif" title="VR Demo"/>
              </div>
            </div>
            <a className="landing-signup" href="#top">Sign me up!</a>
          </div>
        </div>
      );
    }
  }
}

export default App;
