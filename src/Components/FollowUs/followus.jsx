import React from 'react';
import PropTypes from 'prop-types';

import './followus.scss';

const FollowUs = (props) => {
  const classNames = `sui-follow-us ${props.className}`;
  return (
    <div className={classNames}>
      <p>
        follow us:
      </p>
      <a href="#linkedin" className="menu-item sui-follow__item">
        <img src="/icons/ln.png" alt="LinkedIn" />
      </a>
      <a href="#behance" className="menu-item sui-follow__item">
        <img src="/icons/ln.png" alt="Behance" />
      </a>
      <a href="#instagram" className="menu-item sui-follow__item">
        <img src="/icons/ln.png" alt="Instagram" />
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
