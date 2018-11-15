import React from 'react';
import PropTypes from 'prop-types';
import FollowUs from '../FollowUs/followus';

import './footer.scss';

const Footer = (props) => {
  if (props.nonVisible) {
    return '';
  }
  return (
    <div id="sui-footer" className="sui-footer">
      <div className="sui-footer__contact">
        <p className="sui-footer__consulta">tens una<br />consulta?</p>
        <p className="sui-footer__telephone">
          <a href="tel:+34646248527"> +34 646 24 85 27 </a>
        </p>
        <p className="sui-footer__mail">
          <a href="mailto:anna@suilabs.com">anna@suilabs.com</a>
        </p>
        <p className="sui-footer__mail">
          <a href="mailto:borja@suilabs.com">borja@suilabs.com</a>
        </p>
      </div>
      <FollowUs />
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

