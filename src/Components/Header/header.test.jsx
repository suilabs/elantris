import React from 'react';

import Header from './header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Header/>
    );
    
    expect(tree).toMatchSnapshot();
  });
});
