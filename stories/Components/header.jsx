import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Header from '../../src/Components/Header';

storiesOf('Header', module)
  .add('Normal', () => (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )).add('Changing logo', () => {
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  });
