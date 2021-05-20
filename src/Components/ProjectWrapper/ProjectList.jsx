import React from 'react';
import PropTypes from 'prop-types';

import ProjectsService from '../../Services/ProjectService';
import TranslationService from '../../Services/TranslationService';
import Loading from '../../Components/Common/Loading';
import LayoutBuilder from '../../Components/ProjectWrapper/LayoutBuilder';
import Gallery from '../../Components/ImageGallery';
import Utils from '../../Utils';
import Context from '../../Services/Context';

const createInstance = (title, descr, img, href, tags = []) => ({
  title,
  img,
  tag: tags,
  descr,
  orientation: 'horizontal',
  animationDirection: 'horizontal',
  href,
});

const createInstanceProxy = project => createInstance(
  project.name,
  project.description,
  project.cover.url,
  project.url,
);

class ProjectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentWillMount() {
    if (!this.state.projects.length) {
      Loading(this, (finished) => {
        ProjectsService.byLanguageAndSection(Utils.getCurrentLanguage(), this.props.section).then((pr) => {
          finished();
          this.setProjects(pr);
        });
      });
    }
  }

  setProjects = (projects) => {
    if (projects.length === 0) {
      const translate = TranslationService();
      const project = {
        name: translate.coming_soon_title,
        description: translate.coming_soon_subtitle,
        cover: { url: Utils.getAWSImagesPath('comingSoon.jpg') },
      };
      projects.push(project);
    }
    this.setState({ projects });
  };

  static contextType = Context;

  render() {
    const projects = this.context.length > 0 ? this.context : this.state.projects;
    const { path } = this.props;
    if (path) {
      const project = projects.filter(proj => proj.url === path)[0];
      if (!project) {
        return this.props.onProjectNotFound(path);
      }
      return (
        <div>
          <LayoutBuilder item={project} />
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
          onItemClick={this.props.onItemClick}
        />
      </div>
    );
  }
}

ProjectList.propTypes = {
  path: PropTypes.string,
  section: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onProjectNotFound: PropTypes.func.isRequired,
};

ProjectList.defaultProps = {
  path: null,
};

export default ProjectList;
