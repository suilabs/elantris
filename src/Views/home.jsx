import React from 'react';

import './home.scss';
import ProjectsView from './projects';

const Home = (props) => {
  console.log(props);
  return <ProjectsView section="photos" {...props} />;
};

export default Home;
