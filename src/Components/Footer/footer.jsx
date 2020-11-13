import React from 'react';
import PropTypes from 'prop-types';

import FollowUs from '../FollowUs/followus';
import translations from '../../Services/TranslationService';

import './footer.scss';

const emails = [
  'anna',
  'borja',
];

class MailLink extends React.Component {
  constructor(props) {
    super(props);

    this.reference = {};
    emails.forEach((email) => {
      this.reference[email] = React.createRef();
    });
  }

  redirectToMail = (e) => {
    const input = e.target;
    input.select();
    document.execCommand('copy');
    input.blur();
  };

  render() {
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return emails.map(email => (
      <p key={email} className="sui-footer__mail">
        <input readOnly className="email-input" value={`${email}@suilabs.com`} onClick={this.redirectToMail} />
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

