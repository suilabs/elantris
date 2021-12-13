import React from 'react';

import Utils from '../../../Utils';

import Spinner from './Spinner';

const fakeRender = () => <Spinner />;

/* eslint-disable no-param-reassign */
export default (component, callback) => {
  if (Utils.isSSR()) {
    return;
  }
  const originalRender = component.render;

  const finished = () => {
    component.render = originalRender;
  };

  component.render = fakeRender;
  callback(finished);
};
/* eslint-enable no-param-reassign */
