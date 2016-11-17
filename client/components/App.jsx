import React from 'react';
import Navbar from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      feed: [],
      allitems: [],
      price: true,
      brand: true,
      category: true
    };
  }

  setUser(user) {
    this.setState({user: user});
  }

  setFeed(feed, min, max) {
    min = min || 0;
    max = max || 10000;
    var newfeed = [];
    for (var i = 0; i < feed.length; i++) {
      if (feed[i].price >= min && feed[i].price <= max) {
        newfeed.push(feed[i])
      }
    }
    this.setState({allitems: newfeed});
    if (this.state.allitems.length > 25) {
      this.setState({feed: this.state.allitems.slice(25)});
    } else {
      this.setState({feed: this.state.allitems});
    }
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

  toggleShow() {
    if (this.state.feed.length === 25) {
      this.setState({feed: this.state.allitems});
    } else {
      if (this.state.allitems.length > 25) {
        this.setState({feed: this.state.allitems.slice(25)});
      } else {
        this.setState({feed: this.state.allitems});
      }
    }

  }

  render() {
    var context = this;
    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        user: context.state.user,
        setFeed: context.setFeed.bind(context),
        sortBrand: context.sortBrand.bind(context),
        sortCat: context.sortCat.bind(context),
        sortPrice: context.sortPrice.bind(context),
        toggleShow: context.toggleShow.bind(context),
        feed: context.state.feed
      });
    });

    if (this.state.user.hasOwnProperty('name')) {
      return (
        <div>
          <Navbar user={this.state.user} setUser={this.setUser.bind(this)}/>
          <div>{children}</div>
        </div>
      );
    } else {
      return (
         <div className='app'>
           <Navbar user={this.state.user} setUser={this.setUser.bind(this)}/>
           <h1>Why use our app?</h1>
           <h3>Enter Your Preferences</h3>
           <h3>Browse Your Recommendations</h3>
           <h3>Shop in Virtual Reality (w/ Friends)</h3>
         </div>
      );
    }
  }
}

export default App;
