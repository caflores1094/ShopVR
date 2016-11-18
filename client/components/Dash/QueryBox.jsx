import React from 'react';
import axios from 'axios';

class QueryBox extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        gender: this.props.user.gender,
        minPrice: this.props.user.min_price,
        maxPrice: this.props.user.max_price,
        minSize: this.props.user.min_size,
        maxSize: this.props.user.max_size,
        brand: '',
        item: '',
        offset: 0
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    var gender = this.state.gender === 'male' ? "men" : "women";
    var context = this;
    axios.get('http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23&offset=" + this.state.offset + "&limit=50&fts=' + gender + '+' + this.state.brand + '+' + this.state.item)
    .then(function (response) {
      context.props.setFeed(response.data.products, context.state.minPrice, context.state.maxPrice, context.state.minSize, context.state.maxSize);
    })
    .catch(function (error) {
      console.log('asdfError in sending ajax data ', error);
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
            $<input className="tag-input" onChange={(e) => this.setState({minPrice: e.target.value})} defaultValue={this.props.user.min_price} type="number"/> -
            <br />
            $<input className="tag-input" onChange={(e) => this.setState({maxPrice: e.target.value})} defaultValue={this.props.user.max_price} type="number"/>
  
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
