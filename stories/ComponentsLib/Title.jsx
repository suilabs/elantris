import React from 'react';

import { storiesOf } from '@storybook/react';

import { SuiTitle } from '../../src/ComponentsLib';

storiesOf('Title', module)
  .add('Normal', () => (
    <SuiTitle
      title="Title for project"
      subTitle="SubTitle for project"
    />
  ))
  .add('Colored', () => (
    <SuiTitle
      title="Title for project"
      titleColor="rgba(255,135,70,1)"
      subTitle="SubTitle for project"
      subTitleColor="rgba(60,135,130,1)"
    />
  ))
  .add('Title only', () => (
    <SuiTitle
      title="Title for project"
      subTitle=""
    />
  ));
