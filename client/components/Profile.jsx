import React from 'react';

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
             <input type="text" defaultValue={this.props.user.username}/>
           </p>
           <p>Email:
             <input type="text" defaultValue={this.props.user.email}/>
           </p>
           <p>Gender:
             <select defaultValue={this.props.user.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
             </select>
           </p>
           <p>
           Price Range:
             <input type="number" defaultValue={this.props.user.lowprice}/> - <input type="number" defaultValue={this.props.user.highprice}/>
           </p>
           <input type="submit" value="Submit" />
         </form>
       </div>
    );
  }
}

export default Profile;
