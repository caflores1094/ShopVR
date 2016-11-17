import React from 'react';
import Feed from './Dash/Feed.jsx';
import QueryBox from './Dash/QueryBox.jsx';
import Social from './Dash/Social.jsx';
import ImageUpload from './Dash/ImageUpload.jsx';

class Dashboard extends React.Component {
  constructor(props) {
      super(props);
  }

   render() {
      return (
        <div>
          <div className="dashboard-hero"></div>
          <ImageUpload user={this.props.user} setFeed={this.props.setFeed}/>
          <QueryBox user={this.props.user} setFeed={this.props.setFeed}/>
          <Feed user={this.props.user} feed={this.props.feed} setFeed={this.props.setFeed}
            sortPrice={this.props.sortPrice} sortBrand={this.props.sortBrand} sortCat={this.props.sortCat}
            toggleShow={this.props.toggleShow}/>
          <Social user={this.props.user}/>
        </div>
      );
   }
}

export default Dashboard;
