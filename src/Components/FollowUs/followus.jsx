import React from 'react';
import PropTypes from 'prop-types';

import './followus.css';

const FollowUs = (props) => {
  if (!props.show) {
    return null;
  }
  const classNames = `sui-follow-us ${props.className}`;
  return (
    <div className={classNames}>
      <p>
        follow us:
      </p>
      <a className="menu-item sui-follow__item">LinkedIn</a>
      <a className="menu-item sui-follow__item">Behance</a>
      <a className="menu-item sui-follow__item">Instagram</a>
    </div>
  );
};

FollowUs.propTypes = {
  show: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

FollowUs.defaultProps = {
  className: '',
};

export default FollowUs;
