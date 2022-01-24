import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RelativeLink = (props) => {
  const toRelative = props.to ? `${window.location.pathname}/${props.to}` : '#';
  return (
    <Link to={toRelative} onClick={props.onClick} className={props.className}>
      {props.children}
    </Link>
  );
};

RelativeLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

RelativeLink.defaultProps = {
  onClick: () => {},
  className: null,
};

export default RelativeLink;
