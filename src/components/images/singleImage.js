import React, { Component } from 'react';
import styles from '../../styles';
import Popup from '../../popup/popup';
import ImageComments from '../comment/imageComments';
import ImagePoint from './imagePoint';

const style = styles.SingleImage;

export default class SingleImage extends Component {
  state = {
    isOpen: false
  };

  togglePopup = () => {
    this.setState({isOpen: !this.state.isOpen});
    this.props.changSelectedeImage(this.props.image);
  }

  render() {
    const { image, changSelectedeImage } = this.props;
    return <div>
        <div className='image'>
          <ImagePoint image={image} />
          {/* <button
            type="button"
            style={style.button}
            onClick={(event) => {
              event.preventDefault();
              this.togglePopup();
            }}
          >
            <img alt="#" style={style.image} src={image.file}  className ='img'/>
            <span style={style.name}>{image.name || 'No Name'}</span>
          </button> */}
        </div>
        <div className='imageComments'>
          <ImageComments imageId={image.id} />
        </div>

        {
          this.state.isOpen && <Popup
            content={
              <>
                <b>Design your Popup</b>
                {/* <button>Test button</button> */}
              </>
            }
            handleClose={() => this.togglePopup}
            image={image}
            changSelectedeImage={changSelectedeImage}
          />
        }
    </div>
  }
}
