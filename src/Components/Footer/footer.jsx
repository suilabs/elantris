import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

const Footer = (props) => {
  if (props.nonVisible) {
    return '';
  }
  return (
    <div id="sui-footer" className="sui-footer">
      © {(new Date()).getFullYear()} Suilabs
    </div>
  );
};

Footer.propTypes = {
  nonVisible: PropTypes.bool,
};

Footer.defaultProps = {
  nonVisible: false,
};

export default Footer;
