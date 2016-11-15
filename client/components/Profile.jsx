import React from 'react';
import { browserHistory } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
      super(props);
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
           Max Price:
             <input type="number" defaultValue={this.props.user.maxPrice}/>
           </p>
           <button type="submit" value="Submit">Submit</button>
           <button onClick={(e) => {e.preventDefault(); browserHistory.push('/');}}>Cancel</button>
         </form>
       </div>
    );
  }
}

export default Profile;
