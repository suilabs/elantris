import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ className, content }) => {
  const containsHtml = content.indexOf('__html') !== -1;
  if (!containsHtml) {
    return <p className={className}>{content}</p>;
  }
  return <div dangerouslySetInnerHTML={{ __html: content.slice(7) }} />; // eslint-disable react/no-danger
};

Text.type = 'text';

Text.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Text.defaultProps = {
  className: '',
};

export default Text;
