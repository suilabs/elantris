import React from 'react';
import { storiesOf } from '@storybook/react';

import Spinner from '../../../src/Components/Common/Loading/Spinner';

storiesOf('Spinner', module)
  .add('is Animated', () => (
    <Spinner />
  ));
