import React from 'react';
import PropTypes from 'prop-types';

import './VFlexBox.scss';

export const justification = {
  center: 'center',
  between: 'space-between',
  evenly: 'space-evenly',
  start: 'flex-start',
  around: 'space-around',
};

const VFlexBox = (props) => {
  const justifyStyle = {
    justifyContent: props.justify,
    alignItems: props.vAlign,
  };
  const className = `sui-vertical-flexbox ${props.className}`;
  return (
    <div className={className} style={justifyStyle}>
      {props.children}
    </div>
  );
};

VFlexBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  justify: PropTypes.oneOf(Object.values(justification)),
  vAlign: PropTypes.oneOf(Object.values(justification)),
  className: PropTypes.string,
};

VFlexBox.defaultProps = {
  justify: 'center',
  vAlign: 'center',
  className: '',
};

export default VFlexBox;
