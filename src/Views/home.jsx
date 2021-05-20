import React from 'react';

import './home.scss';
import ProjectsView from './projects';

const Home = props => (
  <ProjectsView
    section="photos"
    {...props}
  />
);

export default Home;
