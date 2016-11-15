import React from 'react';
import axios from 'axios';

class QueryBox extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        gender: this.props.user.gender === 'male' ? "men" : "women",
        minPrice: this.props.user.minPrice,
        maxPrice: this.props.user.maxPrice,
        brand: '',
        item: ''
      }
  }

  handleSubmit(e) {
    e.preventDefault();

    var context = this;
    axios.get('http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23&limit=25&fts=' + this.state.gender + '+' + this.state.brand + '+' + this.state.item)
    .then(function (response) {
      context.props.setFeed(response.data.products, context.state.minPrice, context.state.maxPrice);
    })
    .catch(function (error) {
      console.log('asdfError in sending ajax data ', error);
    });
  }

   render() {
      return (
         <div>
         <h1>Search</h1>
         <form onSubmit={(e) => this.handleSubmit(e)}>
           <p>Gender:
             <select onChange={(e) => this.setState({gender: e.target.value})} defaultValue={this.props.user.gender}>
              <option value="men's">men</option>
              <option value="women's">women</option>
             </select>
           </p>

           <p>Price:
             <input onChange={(e) => this.setState({minPrice: e.target.value})} defaultValue={this.props.user.minPrice} type="number"/> -
             <input onChange={(e) => this.setState({maxPrice: e.target.value})} defaultValue={this.props.user.maxPrice} type="number"/>
           </p>

           <p>Brand:
             <input onChange={(e) => this.setState({brand: e.target.value})}/>
           </p>

           <p>Item:
             <input onChange={(e) => this.setState({item: e.target.value})}/>
           </p>

           <button type="submit">Submit</button>
         </form>
        </div>
      );
   }
}

export default QueryBox;
