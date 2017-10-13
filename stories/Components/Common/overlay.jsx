import React from 'react';
import { storiesOf } from '@storybook/react';

import Overlay from '../../../src/Components/Common/Overlay/Overlay';

storiesOf('Overlay', module)
  .add('Visible', () => (
    <Overlay location="location" keyword="location" >
      Something
    </Overlay>
  ));

