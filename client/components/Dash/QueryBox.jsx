import React from 'react';

class QueryBox extends React.Component {
  constructor(props) {
      super(props);
  }
  createCheckbox(label) {
    return <p><input id={label} type='checkbox'/>{label}</p>;
  }
  createCheckboxes(items) {
    return items.map(this.createCheckbox);
  }

   render() {
      return (
         <div>
         <h1>Search</h1>
         <form>
           <p>Gender:
             <select defaultValue={this.props.user.gender}>
              <option value="men's">men</option>
              <option value="women's">women</option>
             </select>
           </p>

           <p>Max Price:
             <input defaultValue={this.props.user.maxPrice} type="number"/>
           </p>

           <p>Brand:
             <input />
           </p>

           <p>Item:
             <input />
           </p>

           <input type="submit" value="Submit" />
         </form>
        </div>
      );
   }
}

export default QueryBox;
