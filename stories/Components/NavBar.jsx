import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import NavBar, { NavBarItem } from '../../src/Components/NavBar';

storiesOf('NavBar', module)
  .add('Normal', () => {
    window.suilabs = { isMobile: false };
    return (
      <BrowserRouter>
        <NavBar>
          <NavBarItem to="#" label="Design" />
          <NavBarItem to="#" label="Software" />
          <NavBarItem to="#" label="About us" />
        </NavBar>
      </BrowserRouter>
    );
  });
