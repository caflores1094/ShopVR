import React from 'react';
import axios from 'axios';

var start = true;

class QueryBox extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        minSize: this.props.user.min_size,
        maxSize: this.props.user.max_size,
        brand: '',
        item: '',
        offset: 0,
        feedType: 'query',
        limit: 50,
        gender: this.props.user.gender
      }
  }

  componentDidUpdate() {
    if (start) {
      this.setState({
        gender: this.props.user.gender,
        minPrice: this.props.user.min_price,
        maxPrice: this.props.user.max_price
      })
      this.refs.min.value = this.props.user.min_price;
      this.refs.max.value = this.props.user.max_price;
    }
    start = false;
  }

  handleSubmit(e) {
    e.preventDefault();
    var gender = this.state.gender === 'male' ? "men" : "women";
    console.log('Search gender: ', gender)
    var context = this;
    axios.post("/api/shopstyle", {offset: this.state.offset, fts: gender + '+' + this.state.brand + '+' + this.state.item, limit: this.state.limit})
    .then(function (response) {
      context.props.setFeed(response.data.products, context.state.feedType, context.state.minPrice, context.state.maxPrice);
    })
    .catch(function (error) {
      console.log('Error in sending ajax data ', error);
    });
  }

   render() {
      return (
        <div className="search-component">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <p className="search-label">Gender:</p>
            <div className="select">
              <select className="select-gender" value={this.state.gender} onChange={(e) => this.setState({gender: e.target.value})}>
                <option value="male">Men</option>
                <option value="female">Women</option>
              </select>
              <div className="select-arrow"></div>
            </div>

            <p className="search-label">Price:</p>
            $<input className="tag-input" ref='min' onChange={(e) => this.setState({minPrice: e.target.value})} defaultValue={this.props.user.min_price} type="number"/>
            <br />
            $<input className="tag-input" ref='max' onChange={(e) => this.setState({maxPrice: e.target.value})} defaultValue={this.props.user.max_price} type="number"/>

            <p className="search-label">Brand:</p>
            <input className="tag-input" onChange={(e) => this.setState({brand: e.target.value})}/>

            <p className="search-label">What are you looking for?:</p>
            <input className="tag-input" onChange={(e) => this.setState({item: e.target.value})}/>

            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      );
   }
}

export default QueryBox;
