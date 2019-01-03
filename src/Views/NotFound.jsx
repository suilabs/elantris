import React from 'react';
import Utils from '../Utils';

import './NotFound.scss';

const NotFound = () => (
  <div className="sui-not-found-wrapper">
    <img src={Utils.getAWSImagesPath('notFound.jpg')} alt="Page not found" />
    <p>You can keep searching for the scroll of the truth or <br /><a href="/">go back Home</a></p>
  </div>
);

export default NotFound;
