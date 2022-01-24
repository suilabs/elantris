import React from 'react';

import Utils from '../Utils';
import translations from '../translations';

import './NotFound.scss';

const NotFound = () => (
  <div className="sui-not-found-wrapper">
    <img src={Utils.getAWSImagesPath('notFound.jpg')} alt="Page not found" />
    <p>
      {translations.es.not_found_text}
      <br />
      <a href="/">{translations.es.not_found_link}</a>
    </p>
  </div>
);

export default NotFound;
