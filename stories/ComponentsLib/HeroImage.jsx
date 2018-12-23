import React from 'react';

import { storiesOf } from '@storybook/react';

import { SuiHeroImage } from '../../src/ComponentsLib/';

storiesOf('HeroImage', module)
  .add('Normal', () => (
    <SuiHeroImage
      image={{ url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg' }}
      alt="this is a hero image"
    />
  ))
  .add('With Title', () => (
    <SuiHeroImage
      image={{ url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg' }}
      alt="this is a hero image"
      height="20rem"
      title="Project Title"
      subTitle="this is a project description"
    />
  ))
  .add('With Title in colors', () => (
    <SuiHeroImage
      image={{ url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg' }}
      alt="this is a hero image"
      title="Project Title"
      subTitle="this is a project description"
      titleColor="rgba(139, 3, 79, 1)"
      subTitleColor="rgba(139, 3, 79, 1)"
    />
  ));
