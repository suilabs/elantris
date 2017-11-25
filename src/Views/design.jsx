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
      projects: [],
    };
  }

  componentWillMount() {
    Loading(this, (finished) => {
      ProjectsService.getProjects().then((pr) => {
        finished();
        this.setState({ projects: pr });
      })
    });
  }

  render() {
    const { projects } = this.state;
    const { project: selectedProject } = this.props.match.params;
    if (selectedProject) {
      const { title, type, images } = projects.filter((proj) => proj.key === selectedProject)[0];
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
      <div>
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
