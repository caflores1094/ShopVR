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
      imageUpload: "none",
      search: "none"
    }
  }

  showTool(name, e) {
    var toShow = {};
    if (this.state[name] === "none") {
      toShow[name] = "block";
      this.setState(toShow);
    } else {
      toShow[name] = "none";
      this.setState(toShow);
    }
  }

  render() {
    return (
      <div>
        <div className="dashboard-hero"></div>
        <div className="dashboard-border"></div>
        <div className="content">
          <div className="dashboard-tools">
            <button className="dashboard-button" onClick={() => browserHistory.push('/vr')}>View In VR</button>
            <div className="dashboard-upload">
              <button onClick={this.showTool.bind(this, 'imageUpload')} className="upload-button">Upload Image</button>
              <div name="imageUpload" className="image-upload" style={{display: this.state.imageUpload}}>
                <ImageUpload user={this.props.user} setFeed={this.props.setFeed}/>
              </div>
            </div>
            <div className="dashboard-search">
              <button onClick={this.showTool.bind(this, 'search')} className="search-button">Search</button>
              <div name="search" className="query-box" style={{display: this.state.search}}>
                <QueryBox style={{ display: this.state.search }} user={this.props.user} setFeed={this.props.setFeed}/>
              </div>
            </div>
          </div>

          <div className="dashboard-feed">
            <Feed user={this.props.user} feed={this.props.feed} setFeed={this.props.setFeed}
              sortPrice={this.props.sortPrice} sortBrand={this.props.sortBrand} sortCat={this.props.sortCat}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
