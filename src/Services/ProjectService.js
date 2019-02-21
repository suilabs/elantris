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
  byLanguage: lang => APIConnector.getProjectsByLanguage(lang)
    .then(({ data }) => data.projectsByLanguage),
  byLanguageAndSection: (language, section) => APIConnector.getProjectsByLanguage(language)
    .then(({ data }) =>
      data.projectsByLanguage.filter(project => project.section.name.toLowerCase() === section.toLowerCase()),
    ),
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
