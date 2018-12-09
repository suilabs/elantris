import React from 'react';

import { storiesOf } from '@storybook/react';

import { SuiTag } from '../../src/ComponentsLib';

storiesOf('Tags', module)
  .add('Normal', () => (
    <SuiTag
      tags="Tag1, Tag2, Tag3, tag with spaces"
    />
  ))
  .add('With custom color', () => (
    <SuiTag
      tags="Tag1, Tag2, Tag3, tag with spaces"
      style={
        {
          color: 'rgba(139, 3, 79, 1)',
        }
      }
    />
  ));
