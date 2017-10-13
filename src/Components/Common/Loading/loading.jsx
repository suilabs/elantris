import React from 'react';

import Spinner from './Spinner';

const fakeRender = () => (
  <Spinner />
);


export default (component, callback) => {
  const originalRender = component.render;

  const finished = () => {
    component.render = originalRender;
  };

  component.render = fakeRender;
  callback(finished);
}
