import React from 'react';
import PropTypes from 'prop-types';

import './Language.scss';

const Language = ({
  className, onClick, id, flagUrl, original, ISO,
}) => (
  <div
    className={`sui-language ${className}`}
  >
    <button
      onClick={onClick}
      id={id}
      className="sui-language--button"
    >
      <img
        src={flagUrl}
        alt={`${original} language flag`}
        className="sui-language-flag"
      />
      <span>{ISO}</span>
    </button>
  </div>
);

Language.propTypes = {
  className: PropTypes.string,
  ISO: PropTypes.string.isRequired,
  flagUrl: PropTypes.string.isRequired,
  original: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Language.defaultProps = {
  className: '',
  onClick: () => {},
};

export default Language;
