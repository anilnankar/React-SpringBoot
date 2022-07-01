import React, { Component } from 'react';
import ImageComments from '../comment/imageComments';
import ImagePoint from './imagePoint';

export default class SingleImage extends Component {
  render() {
    const { image } = this.props;
    return <div>
        <div className='image'>
          <ImagePoint image={image} />
        </div>
        <div className='imageComments'>
          <ImageComments imageId={image.id} />
        </div>
    </div>
  }
}
