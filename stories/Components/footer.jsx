import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Footer from '../../src/Components/Footer';

storiesOf('Footer', module)
  .add('Normal', () => (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  ));
