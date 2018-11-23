import React from 'react';
import PropTypes from 'prop-types';

import ProjectsService from '../Services/ProjectService';
import Loading from '../Components/Common/Loading';
import LayoutBuilder from '../Components/ProjectWrapper/LayoutBuilder';
import LayoutDesign from '../Components/ProjectWrapper/LayoutDesign';
import Gallery from '../Components/ImageGallery';
import Utils from '../Utils';

const createInstance = (title, descr, img, href, tags = ['design']) => ({
  title,
  img,
  tag: tags,
  descr,
  orientation: 'horizontal',
  animationDirection: 'horizontal',
  href,
});

const createInstanceProxy = (project) => {
  if (Utils.getFeatureFlag('newBackend') === 'true') {
    return createInstance(
      project.name,
      project.description,
      project.cover.url,
      project.url,
    );
  }
  return createInstance(
    project.title,
    project.subTitle,
    Utils.getImage(project.coverImage.url),
    project.key,
  );
};

class Design extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentWillMount() {
    Loading(this, (finished) => {
      ProjectsService.getProjects().then((pr) => {
        finished();
        this.setState({ projects: pr });
      });
    });
  }

  render() {
    const { projects } = this.state;
    const { project: selectedProject } = this.props.match.params;
    if (selectedProject) {
      const project = projects.filter(proj => proj.url === selectedProject || proj.key === selectedProject)[0]; // remove proj.key once newBackend is 100%
      return (
        <div>
          {Utils.getFeatureFlag('newBackend')
            ? <LayoutBuilder item={project} />
            : <LayoutDesign
              title={project.title}
              type={project.type}
              images={project.images}
            />
          }
        </div>
      );
    }
    return (
      <div className="sui-view-wrapper">
        <Gallery
          size={{ width: 284 }}
          instances={
            projects.map(createInstanceProxy)
          }
        />
      </div>
    );
  }
}

Design.propTypes = {
  // location: PropTypes.shape({ hash: PropTypes.string }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      project: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default Design;
