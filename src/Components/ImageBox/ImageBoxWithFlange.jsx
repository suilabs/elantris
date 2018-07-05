import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Utils from '../../Utils';

import FlangeIcon from '../../assets/icons/flange/Flange';

import './ImageBoxWithFlange.css';

class ImageBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTextVisible: false,
      size: null,
    };

    this.showText = this.showText.bind(this);
  }

  showText() {
    const size = this.appendix.offsetHeight - this.button.offsetHeight;
    const padding = Utils.getCss(this.appendix, 'padding-bottom');
    this.setState({
      isTextVisible: !this.state.isTextVisible,
      size: `calc( -${size}px - ${padding})`,
    });
  }

  render() {
    const { img, alt, children } = this.props;
    const activeStyle = (this.state.isTextVisible && {
      transform: `translateY(${this.state.size})`,
    }) || {};
    const svgClassName = this.state.isTextVisible ? 'sui-flange--flipped' : '';
    return (
      <div className="sui-flange--wrapper">
        <img src={img} alt={alt} />
        { children && <div className="sui-flange--info-wrapper" style={activeStyle}>
          <button
            ref={(el) => { this.button = el; }}
            className="sui-flange--button"
            onClick={this.showText}
          >
            <FlangeIcon className={svgClassName} />
          </button>
          <div ref={(el) => { this.appendix = el; }} className="sui-flange--appendix">
            {children}
          </div>
        </div> }
      </div>
    );
  }
}

ImageBox.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ImageBox.defaultProps = {
  children: null,
};

export default ImageBox;
