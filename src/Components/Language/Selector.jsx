import React from 'react';
import PropTypes from 'prop-types';

import Language from './Language';

import './Selector.scss';

const LanguageSelector = ({
  languages, selected, onClick, className, ...props
}) => {
  const selectedClass = 'sui-language--selected';
  return (
    <div className={className} {...props}>
      {languages.map(({ ISO2, ...rest }) => (
        <Language
          key={ISO2}
          {...rest}
          onClick={onClick}
          id={ISO2}
          className={selected === ISO2 ? selectedClass : ''}
        />
      ))}
    </div>
  );
};

LanguageSelector.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    ISO: PropTypes.string,
    ISO2: PropTypes.string,
    original: PropTypes.string,
    flagUrl: PropTypes.string,
  })),
  className: PropTypes.string,
  selected: PropTypes.string,
  onClick: PropTypes.func,
};

LanguageSelector.defaultProps = {
  languages: [],
  className: '',
  selected: null,
  onClick: () => {},
};

export default LanguageSelector;
