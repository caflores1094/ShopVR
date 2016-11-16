import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      gender: this.props.user.gender,
      min_price: this.props.user.min_price,
      max_price: this.props.user.max_price,
      myImages: []
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
      this.state = {

      }
  }
  onUpdate(e) {
    e.preventDefault();
  }

  componentDidMount(){
    this.getMyImages();
  }

  render() {
    return (
       <div>
           <h1>Profile</h1>
           <form>
             <p>Name:
               <input type="text" defaultValue={this.props.user.name}/>
             </p>
             <p>Email:
               <input type="text" defaultValue={this.props.user.email}/>
             </p>
             <p>Gender:
               <select defaultValue={this.props.user.gender}>
                <option value="men's">men</option>
                <option value="women's">women</option>
               </select>
             </p>
             <p>
             Min Price:
               <input type="number" defaultValue={this.props.user.min_price}/>             
             </p>
             <p>
             Max Price:
               <input type="number" defaultValue={this.props.user.max_price}/>
             </p>
             <button type="submit" value="Submit">Submit</button>
             <button onClick={(e) => {e.preventDefault(); browserHistory.push('/');}}>Cancel</button>
           </form>
           <div className='myPics'>
            <h2>My Uploaded Pictures</h2>
            <div className='picList'>
              {
                this.state.myImages.map((picObj) => <img src={picObj.name} />)
              }
            </div>
           </div>
       </div>
    );
  }
}

export default Profile;
