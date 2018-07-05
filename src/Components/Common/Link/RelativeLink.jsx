import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RelativeLink = (props) => {
  const toRelative = `${window.location.pathname}/${props.to}`;
  return <Link to={toRelative}>{props.children}</Link>;
};

RelativeLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RelativeLink;
