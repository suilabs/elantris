import React from 'react';

import { storiesOf } from '@storybook/react';

import { SuiImage } from '../../src/ComponentsLib/';

storiesOf('Image', module)
  .add('Normal', () => (
    <SuiImage
      image={{
        url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg',
      }}
      alt="this is a hero image"
    />
  ))
  .add('Half width', () => (
    <SuiImage
      image={{
        url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg',
      }}
      alt="this is a hero image"
      width={50}
    />
  ))
  .add('Two images side by side', () => [
    <SuiImage
      image={{
        url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg',
      }}
      alt="this is a hero image"
      width={50}
    />,
    <SuiImage
      image={{
        url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg',
      }}
      alt="this is a hero image"
      width={50}
    />,
  ]);
