import React from 'react';
import PropTypes from 'prop-types';

import FollowUs from '../FollowUs';
import { VFlexBox, justification } from '../Common/FlexBoxes';

import './footer.css';

const Footer = (props) => {
  if (props.nonVisible) {
    return '';
  }
  return (
    <div id="sui-footer" className="sui-footer">
      <div className="sui-footer__contact">
        <VFlexBox justify={justification.start} vAlign={justification.start}>
          <span className="sui-footer__consulta">tens una consulta?</span>
          <span className="sui-footer__telephone">+34 646 24 85 27</span>
          <a className="sui-footer__mail" href="mailto://anna@suilabs.com">anna at suilabs.com</a>
          <a className="sui-footer__mail" href="mailto://borja@suilabs.com">borja at suilabs.com</a>
        </VFlexBox>
      </div>
      <FollowUs className={'sui-footer__social'} show />
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

