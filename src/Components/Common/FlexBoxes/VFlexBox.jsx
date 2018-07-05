import React from 'react';
import PropTypes from 'prop-types';

import './VFlexBox.css';

export const justification = {
  center: 'center',
  between: 'space-between',
  evenly: 'space-evenly',
  start: 'flex-start',
  around: 'space-around',
};

const VFlexBox = (props) => {
  const justfStyle = {
    justifyContent: props.justify,
    alignItems: props.vAlign,
  };
  return (
    <div className="sui-vertical-flexbox" style={justfStyle}>
      {props.children}
    </div>
  );
};

VFlexBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  justify: PropTypes.oneOf(Object.values(justification)),
  vAlign: PropTypes.oneOf(Object.values(justification)),
};

VFlexBox.defaultProps = {
  justify: 'center',
  vAlign: 'center',
};

export default VFlexBox;
