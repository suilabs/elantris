import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ProjectsService from '../../Services/ProjectService';
import Gallery from '../ImageGallery';
import Utils from '../../Utils';
import Context from '../../Services/Context';
import Spinner from '../Common/Loading/Spinner';

import LayoutBuilder from './LayoutBuilder';

const createInstance = (title, descr, img, href, tags = []) => ({
  title,
  src: img,
  tag: tags,
  descr,
  href,
});

const createInstanceProxy = (project) =>
  createInstance(
    project.name,
    project.description,
    project.cover.url,
    project.url,
    [project.type?.name],
  );

const ProjectList = ({ section, path, onItemClick, onProjectNotFound }) => {
  const context = useContext(Context);
  const [projects, setProjects] = useState(context?.projects || null);
  const [isLoading, setIsLoading] = useState(!Utils.isSSR());

  useEffect(() => {
    const setProjectsWithFallback = (pr) => {
      if (pr.length === 0) {
        const project = {
          cover: { url: Utils.getAWSImagesPath('comingSoon.jpg') },
        };
        projects.push(project);
      }
      setProjects(pr);
    };
    if (isLoading && projects === null) {
      ProjectsService.bySection(section).then((pr) => {
        setProjectsWithFallback(pr);
        setIsLoading(false);
      });
    }
  }, [section, isLoading, projects]);

  if (isLoading) {
    return <Spinner />;
  }

  if (path) {
    const project = projects.filter((proj) => proj.url === path)[0];
    if (!project) {
      return onProjectNotFound(path);
    }
    return (
      <div>
        <LayoutBuilder item={project} />
      </div>
    );
  }

  // eslint-disable-next-line backpack/use-tokens
  const size = { width: 284 };

  return (
    <div className="sui-view-wrapper">
      <Gallery
        size={size}
        instances={projects.map(createInstanceProxy)}
        onItemClick={onItemClick}
      />
    </div>
  );
};

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
