import React from 'react';
import PropTypes from 'prop-types';

import translations from '../../Services/TranslationService';

import './followus.scss';
import Utils from '../../Utils';

const FollowUs = (props) => {
  const classNames = `sui-follow-us ${props.className}`;
  return (
    <div className={classNames}>
      <p>
        {translations().followUs}
      </p>
      <a
        href="https://www.linkedin.com/in/anna-berenguer-gisbert-798954aa/"
        className="menu-item sui-follow__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Utils.getAWSImagesPath('linkedin.svg')} alt="LinkedIn" />
      </a>
      <a
        href="https://www.behance.net/annaberenguer"
        className="menu-item sui-follow__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Utils.getAWSImagesPath('behance.svg')} alt="Behance" />
      </a>
      <a
        href="https://www.instagram.com/suilabs/"
        className="menu-item sui-follow__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Utils.getAWSImagesPath('insta.svg')} alt="Instagram" />
      </a>
    </div>
  );
};

FollowUs.propTypes = {
  className: PropTypes.string,
};

FollowUs.defaultProps = {
  className: '',
};

export default FollowUs;
