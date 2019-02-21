import React from 'react';
import Utils from '../Utils';

import translate from '../Services/TranslationService';

import './NotFound.scss';

const NotFound = () => {
  const tranlations = translate();
  return (
    <div className="sui-not-found-wrapper">
      <img src={Utils.getAWSImagesPath('notFound.jpg')} alt="Page not found" />
      <p>{tranlations.not_found_text}<br /><a href="/">{tranlations.not_found_link}</a></p>
    </div>
  );
};

export default NotFound;
