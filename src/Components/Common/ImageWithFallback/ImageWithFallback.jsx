import React, {Component} from 'react';
import PropTypes from 'proptypes';

class ImageWithFallback extends Component {
  constructor() {
    super();
    this.state = {};
    this.fallback = () => {
      if (this.props.fallbackSrc) {
        this.setState({ failed: true });
      }
    };
  }
  
  render() {
    if (this.state.failed) {
      return <img src={this.props.fallbackSrc} />;
    } else {
      return <img src={this.props.src} onError={this.fallback} />;
    }
  }
}

ImageWithFallback.propTypes = {
  fallbackSrc: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

ImageWithFallback.defaultProps = {
  fallbackSrc: 'http://maxpixel.freegreatpicture.com/static/photo/1x/Http-News-Html-Error-404-Was-Not-Found-Page-1349562.png'
};

export default ImageWithFallback;
