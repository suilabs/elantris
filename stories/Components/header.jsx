import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Header from '../../src/Components/Header';

storiesOf('Header', module)
  .add('Normal', () => {
    window.suilabs = { isMobile: false, language: 'ca' };
    return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  })
  .add('Mobile', () => {
    window.suilabs = { isMobile: true };
    return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
