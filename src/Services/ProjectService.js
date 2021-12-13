import APIConnector from '../api/ApiConnector';

const cache = {
  data: null,
  isValid: false,
};

let SSRProjects = null;

export default {
  getProjects: () =>
    new Promise((resolve, reject) => {
      if (SSRProjects) {
        return resolve(SSRProjects);
      }
      return APIConnector.getProjects()
        .then(({ data }) => {
          if (!cache.isValid) {
            cache.data = data.projects;
          }
          resolve(cache.data);
        })
        .catch(reject);
    }),
  getTypes: () =>
    new Promise((resolve, reject) => {
      APIConnector.getProjectTypes()
        .then(({ data }) => {
          resolve(data.types);
        })
        .catch(reject);
    }),
  bySection: (section) =>
    APIConnector.getProjects().then(({ data }) =>
      data.projects.filter(
        (project) =>
          project.section.name.toLowerCase() === section.toLowerCase(),
      ),
    ),
  createProject: ({
    key,
    title,
    subTitle,
    coverImage,
    types,
    images,
    password,
  }) => {
    cache.isValid = false;
    return APIConnector.createProject(
      {
        key,
        title,
        subTitle,
        coverImage,
        types,
        images,
      },
      password,
    );
  },
  createType: (type, password) =>
    APIConnector.createProjectType(type, password),
  setProjects: (projects) => {
    SSRProjects = projects;
  },
};
