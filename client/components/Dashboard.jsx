import React from 'react';
import Feed from './Dash/Feed.jsx';
import QueryBox from './Dash/QueryBox.jsx';
import Social from './Dash/Social.jsx';
import ImageUpload from './Dash/ImageUpload.jsx';
import { browserHistory } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUpload: "displayNone",
      search: "displayNone"
    }
  }

  render() {
    return (
      <div>
        <div className="dashboard-hero"></div>
        <div className="dashboard-border"></div>
        <button className="dashboard-button" onClick={() => browserHistory.push('/vr')}>View In VR</button>
        <div className="dashboard-upload">
          <button className="upload-button">Upload Image</button>
          <ImageUpload style={{ display: this.state.imageUpload }} user={this.props.user} setFeed={this.props.setFeed}/>
        </div>
        <div className="dashboard-search">
          <button className="search-button">Search</button>
          <QueryBox style={{ display: this.state.search }} user={this.props.user} setFeed={this.props.setFeed}/>
        </div>
        
        <div className="dashboard-feed">
          <Feed user={this.props.user} feed={this.props.feed} setFeed={this.props.setFeed}
            sortPrice={this.props.sortPrice} sortBrand={this.props.sortBrand} sortCat={this.props.sortCat}
            toggleShow={this.props.toggleShow}/>
        </div>
        <Social user={this.props.user}/>
      </div>
    );
  }
}

export default Dashboard;
