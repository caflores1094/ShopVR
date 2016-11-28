import React from 'react';

class Test extends React.Component {
  constructor(props) {
      super(props);
  }

   render() {
      return (
        <div>

          HELLO HELLO HELLO
          {this.props.children}

        </div>
      );
   }
}

export default Test;
