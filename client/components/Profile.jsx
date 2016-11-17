import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Wishlist from './Wishlist.jsx';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      gender: this.props.user.gender,
      min_price: this.props.user.min_price,
      max_price: this.props.user.max_price,
      myImages: [],
      wishList: []
    }
  }

  getMyImages(){
    var obj = {};
    obj['u_id'] = this.props.user.id;
    var context = this;
    axios.post('/api/myImages', obj)
    .then(function(result) {
      context.setState({ myImages: result.data})
    });
  }

  handleInputChange(name, e) {
    e.preventDefault();
    var update = {};
    update[name] = e.target.value
    this.setState(update);
  }

  handleUpdate(e) {
    e.preventDefault();
    var obj = this.state;
    obj['id'] = this.props.user.id;

    var context = this;

    axios.post('/update/profile', obj)
    .then(function(result) {
      window.location.assign('/profile');
    });
  }

  getWishList(){
    var obj = {};
    obj['userID'] = this.props.user.id;
    var context = this;
    axios.post('/api/getWishList', obj)
    .then(function(result) {
      var dataArr = result.data;
      var wlObj = {};
      dataArr.forEach((elem) => {
        wlObj[elem.pic_name] = elem;
      });

      var finalArr = [];

      for(var key in wlObj){
        finalArr.push(wlObj[key]);
      }
      context.setState({ wishList: finalArr})
    });
  }

  componentDidMount(){
    this.getWishList();
  }

  render() {
    return (
       <div>
           <h1>Welcome, {this.props.user.name}</h1>
           <form>
             <img className="profile-pic" src={this.props.user.profile_pic} />
             <p>Name:
               <input onChange={this.handleInputChange.bind(this, 'name')} type="text" defaultValue={this.props.user.name}/>
             </p>
             <p>Email:
               <input onChange={this.handleInputChange.bind(this, 'email')} type="text" defaultValue={this.props.user.email}/>
             </p>
             <p>Gender:
               <select onChange={this.handleInputChange.bind(this, 'gender')} defaultValue={this.props.user.gender}>
                <option value="male">male</option>
                <option value="female">female</option>
               </select>
             </p>
             <p>
             Min Price:
              <input onChange={this.handleInputChange.bind(this, 'min_price')} type="number" defaultValue={this.props.user.min_price}/>
             </p>
             <p>
             Max Price:
               <input onChange={this.handleInputChange.bind(this, 'max_price')} type="number" defaultValue={this.props.user.max_price}/>
             </p>
             <button type="submit" onClick={(e)=>this.handleUpdate(e)} value="Submit">Update</button>
           </form>
           <div className='wishListArea'>
            <h2>My Wishlist</h2>
            <div className='wishList'>
              <Wishlist getWishList={this.getWishList.bind(this)} list={this.state.wishList}/>
            </div>
           </div>
       </div>
    );
  }
}

export default Profile;
