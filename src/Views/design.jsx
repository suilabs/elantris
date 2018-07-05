import React from 'react';
import PropTypes from 'prop-types';

import Utils from '../Utils';
import ProjectsService from '../Services/ProjectService';
import Loading from '../Components/Common/Loading';

import LayoutDessign from '../Components/ProjectWrapper/LayoutDessign';

import Gallery from '../Components/ImageGallery';

const createInstance = (title, descr, img, href, tags = ['design']) => ({
  title,
  img,
  tag: tags,
  descr,
  orientation: 'horizontal',
  animationDirection: 'horizontal',
  href,
});

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
      const { title, type, images } = projects.filter(proj => proj.key === selectedProject)[0];
      return (
        <div>
          <LayoutDessign
            title={title}
            type={type}
            images={images}
          />
        </div>);
    }
    return (
      <div className="sui-view-wrapper">
        <Gallery
          size={{ width: 284 }}
          instances={
            projects.map(
              (p => createInstance(p.title,
                p.subTitle,
                Utils.getImage(p.coverImage.url),
                p.key)
              ))
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
