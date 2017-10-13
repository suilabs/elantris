import React from 'react';
import PropTypes from 'proptypes';

import './Overlay.css';

class Overlay extends React.Component {

  componentWillReceiveProps(props) {
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
        <div className="sui-overlay-body">
          {children}
        </div>
      </div>
    );
  }

}
//
// const Overlay = (props) => {
//
// };

Overlay.propTypes = {
  location: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.nodega]).isRequired,
};

export default Overlay;
