import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Contact from '../../src/Components/ProfileCard/index';

storiesOf('ContactCard', module)
  .add('Normal', () => (
    <BrowserRouter>
      <Contact
        img="https://static.suilabs.com/images/about/fotoperfilanna.png"
        name="Anna Berenguer"
        work={['Disseny Gràfic', 'Interiorisme']}
        contact={['+34 646 248 527', 'anna@suilabs.com']}
        social={[{ type: 'linkedIn', url: 'https://www.linkedin.com/in/anna-berenguer-gisbert-798954aa/' }]}
      />
    </BrowserRouter>
  ));
