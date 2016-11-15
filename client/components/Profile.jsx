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
             <input type="text" defaultValue={this.props.user.name}/>
           </p>
           <p>Email:
             <input type="text" defaultValue={this.props.user.email}/>
           </p>
           <p>Gender:
             <select defaultValue={this.props.user.gender}>
              <option value="male">male</option>
              <option value="female">female</option>
             </select>
           </p>
           <p>
           Price Range:
             <input type="number"/> - <input type="number"/>
           </p>
           <input type="submit" value="Submit" />
         </form>
       </div>
    );
  }
}

export default Profile;
