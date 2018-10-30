import GQLQueries from './GraphQL/Queries';
import GQLMutations from './GraphQL/Mutations';
import Utils from '../Utils';

const postApi = (url, form) => {
  const headers = new Headers({
    Accept: 'application/json',
  });
  const fetchConf = {
    method: 'POST',
    body: form,
    headers,
  };
  return fetch(url, fetchConf).then(resp => resp.json());
};

class ApiConnector {
  static _fetchApi = (query) => {
    const headers = new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
    });
    const data = JSON.stringify(query);
    const url = Utils.getAPIPath();
    const fetchConf = {
      method: 'POST',
      headers,
      mode: 'cors',
      body: data,
    };
    return fetch(url, fetchConf).then(resp => resp.json());
  };

  static getProjects() {
    const query = {
      query: GQLQueries.getProjects,
    };
    return this._fetchApi(query);
  }

  static createProject(projectData, password) {
    const query = {
      query: GQLMutations.insertProject,
      variables: { project: projectData },
      password,
    };
    return this._fetchApi(query);
  }

  static getProjectTypes() {
    const query = {
      query: GQLQueries.getTypes,
    };
    return this._fetchApi(query);
  }

  static createProjectType(typeData, password) {
    const query = {
      query: GQLMutations.insertType,
      variables: { type: typeData },
      password,
    };

    return this._fetchApi(query);
  }

  static sendImage(projectName, fileBlob) {
    const formData = new FormData();
    formData.append('data', fileBlob);

    return postApi(Utils.getStaticImagesPath(projectName), formData, fileBlob.type);
  }
}

export default ApiConnector;
