import React from 'react';

import NavBar from './navBar';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <NavBar/>
    );
    
    expect(tree).toMatchSnapshot();
  });
});
