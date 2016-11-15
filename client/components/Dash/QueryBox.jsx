import React from 'react';

class QueryBox extends React.Component {
  constructor(props) {
      super(props);
  }
  createCheckbox(label) {
    return <p><input type='checkbox'/>{label}</p>;
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
              <option value="male">male</option>
              <option value="female">female</option>
             </select>
           </p>

           <p>Price Range:
           <input defaultValue={this.props.user.id} type="number"/> - <input type="number"/>
           </p>

           <p>Brands:</p>
           {this.createCheckboxes(['American Eagle', 'Zara', 'Lululemon', 'Gap', 'Ann Taylor'])}

           <p>Categories:</p>
           {this.createCheckboxes(['Cocktail Dresses', 'Black Short Boots', 'Knit Sweaters', 'Skinny Jeans', 'Black Leather Jackets'])}

           <input type="submit" value="Submit" />
         </form>
        </div>
      );
   }
}

export default QueryBox;
