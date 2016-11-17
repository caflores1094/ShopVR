import React from 'react';
import {Entity, Scene} from 'aframe-react'


class ClothingArticle extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Entity material={{src: `url(${this.props.src})`}} geometry={{primitive: 'box', depth: .1, height: this.props.size*1.25, width: 1.25}} rotation="0 0 0" position={this.props.position} look-at="[camera]" static-body/>
    );
  }
}

export default ClothingArticle;
