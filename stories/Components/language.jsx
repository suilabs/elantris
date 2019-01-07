import React from 'react';
import { storiesOf } from '@storybook/react';

import config from '../../src/config.json';
import LanguageSelector from '../../src/Components/Language';

storiesOf('Language', module)
  .add('Nothing selected', () => (
    <LanguageSelector languages={config.supportedLanguages} />
  ))
  .add('CA selected', () => (
    <LanguageSelector
      languages={config.supportedLanguages}
      selected="ca"
    />
  ));
