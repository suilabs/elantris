import React from 'react';
import PropTypes from 'prop-types';

import './followus.scss';

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
      <a href="#linkedin" className="menu-item sui-follow__item">LinkedIn</a>
      <a href="#behance" className="menu-item sui-follow__item">Behance</a>
      <a href="#instagram" className="menu-item sui-follow__item">Instagram</a>
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
