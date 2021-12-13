import React from 'react';
import PropTypes from 'prop-types';

import './Overlay.scss';

class Overlay extends React.Component {
  UNSAFE_componentWillReceiveProps(props) {
    const { location, keyword } = props;
    const visible = location.indexOf(keyword) !== -1;

    if (visible) {
      setTimeout(() => {
        const overlay = document.getElementById('overlay');
        document.body.appendChild(overlay);
      }, 100);
    }
  }

  render() {
    const { location, keyword, children } = this.props;
    const visible = location.indexOf(keyword) !== -1;
    if (!visible) {
      return null;
    }
    return (
      <div id="overlay" className="sui-overlay-background">
        <div className="sui-overlay-body">{children}</div>
      </div>
    );
  }
}

Overlay.propTypes = {
  location: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Overlay;
