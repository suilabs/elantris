import React from 'react';
import PropTypes from 'prop-types';

import FollowUs from '../FollowUs/followus';
import translations from '../../Services/TranslationService';

import './footer.scss';

const emails = [
  'moc.sbalius@anna',
  'moc.sbalius@ajrob',
];

class MailLink extends React.Component {
  setRef = email => (ref) => {
    if (ref) {
      ref.setAttribute('href', `mailto:${email.split('').reverse().join('')}`);
    }
  };

  render() {
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return emails.map(email => (
      <p className="sui-footer__mail">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a ref={this.setRef(email)}>{email}</a>
      </p>
    ));
  }
}

const Footer = (props) => {
  if (props.nonVisible) {
    return '';
  }
  const text = translations().tensUnaConsulta;
  return (
    <div id="sui-footer" className="sui-footer">
      <div className="sui-footer__contact">
        <p
          className="sui-footer__consulta"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        <p className="sui-footer__telephone">
          <a href="tel:+34646248527"> +34 646 24 85 27 </a>
        </p>
        <MailLink />
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

