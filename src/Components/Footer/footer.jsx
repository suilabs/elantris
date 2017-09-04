import React from 'react';
import PropTypes from 'proptypes';

import './footer.css';

const FooterElement = props => <span className="sui-footer__element"> {props.children} </span>;

FooterElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

FooterElement.defaultProps = {
  children: '',
};

const Footer = (props) => {
  if (props.nonVisible) {
    return '';
  }
  return (
    <div className="sui-footer">
      <div className="sui-footer__right-container">
        <FooterElement>
          Instagram
        </FooterElement>
        -
        <FooterElement>
          LinkedIn
        </FooterElement>
      </div>
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

