import React from 'react';
import { storiesOf } from '@storybook/react';

import { MenuIcon } from '../../src/Components/Icons';

storiesOf('Icons', module)
  .add('Menu', () => (
    <MenuIcon />
  ));
