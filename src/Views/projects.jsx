import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import ProjectList from '../Components/ProjectWrapper/ProjectList';

import withEye from './HoC/withEyes';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  render() {
    const { eye, match, section } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/404" />;
    }

    return (
      <ProjectList
        section={section}
        onItemClick={(event, projectName) => {
          if (window.scrollTo) window.scrollTo(0, 0);
          eye.seeClick('Project', 'Open', projectName);
        }}
        path={match.params.project}
        onProjectNotFound={() => {
          console.error('Project not found, redirecting');
          window.location = '/404';
        }}
      />
    );
  }
}

Projects.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      project: PropTypes.string,
    }),
  }).isRequired,
  eye: PropTypes.shape({
    seeClick: PropTypes.func,
  }).isRequired,
  section: PropTypes.string.isRequired,
};

export default withEye(Projects);
