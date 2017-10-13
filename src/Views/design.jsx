import React from 'react';
import PropTypes from 'proptypes';

import Utils from '../Utils';
import ProjectsService from '../Services/ProjectService';
import Loading from '../Components/Common/Loading';

import LayoutDessign from '../Components/ProjectWrapper/LayoutDessign';

import Gallery from '../Components/ImageGallery';

const createInstance = (title, descr, img, href, tags = ['design']) => {
  return {
    title,
    img,
    tag: tags,
    descr,
    orientation: 'vertical',
    animationDirection: 'vertical',
    href,
  };
}

// const projects = {
//   reccrealo: {
//     title: 'Recrealo',
//     type: 'Infografia il·lustrada',
//     images: [
//       { url: 'rec/rec-perso2.jpg', text: 'Bla bla bla bla bla bla' },
//       { url: 'rec/rec-perso2.jpg', text: 'Bla bla bla bla bla bla' },
//     ],
//   },
// }

class Design extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: {},
    };
  }

  componentWillMount() {
    Loading(this, (finished) => {
      ProjectsService.getProjects().then((projects) => {
        finished();
        this.setState({ projects });
      });
    });
  }

  render() {
    const { projects } = this.state;
    const { project: selectedProject } = this.props.match.params;
    if (selectedProject) {
      const { title, type, images } = projects[selectedProject];
      return (
        <div>
          <LayoutDessign
            title={title}
            type={type}
            images={images}
          />
        </div>);
    }
    const projectsArray = Object.keys(projects).map((key) => {
      projects[key].key = key;
      return projects[key];
    });
    return (
      <div>
        <Gallery
          size={{ width: 284 }}
          instances={
            projectsArray.map(
              (p => createInstance(p.title,
                  p.subTitle,
                  Utils.getImage(p.coverImage),
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
