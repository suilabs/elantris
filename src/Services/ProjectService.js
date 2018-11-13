import APIConnector from '../api/ApiConnector';

const cache = {
  data: null,
  isValid: false,
};

export default {
  getProjects: () => new Promise((resolve, reject) => {
    APIConnector.getProjects()
      .then(({ data }) => {
        if (!cache.isValid) {
          cache.data = data.projects;
        }
        resolve(cache.data);
      })
      .catch(reject);
  }),
  getTypes: () => new Promise((resolve, reject) => {
    APIConnector.getProjectTypes()
      .then(({ data }) => {
        resolve(data.types);
      })
      .catch(reject);
  }),
  createProject: ({
    key, title, subTitle, coverImage, types, images, password,
  }) => {
    cache.isValid = false;
    return APIConnector.createProject(
      {
        key, title, subTitle, coverImage, types, images,
      },
      password,
    );
  },
  createType: (type, password) => APIConnector.createProjectType(type, password),
};
