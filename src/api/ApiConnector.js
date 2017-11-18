import GQLQueries from './GraphQL/Queries';
import GQLMutations from './GraphQL/Mutations';
import Utils from '../Utils';

const postApi = (url, form, contenttype) => {
  const headers = new Headers({
    'Accept': 'application/json'
  });
  const fetchConf = {
    method: 'POST',
    body: form,
    headers
  };
  return fetch(url, fetchConf).then((resp) => {
    return resp.json()
  })
};

class ApiConnector {
  static apiPath = Utils.getAPIPath();
  
  static _fetchApi = (query) => {
    const headers = new Headers({
      'content-type': 'application/json',
      'Accept': 'application/json'
    });
    const data = JSON.stringify(query);
    const url = ApiConnector.apiPath;
    const fetchConf = {
      method: 'POST',
      headers: headers,
      mode: 'cors',
      body: data,
    };
    return fetch(url, fetchConf);
  };
  
  static getProjects() {
    const query = {
      query: GQLQueries.getProjects
    };
    
    return this._fetchApi(query);
  };
  
  static createProject(projectData) {
    const query = {
      query: GQLMutations.insertProject,
      variables: {project: projectData}
    };
    return this._fetchApi(query);
  }
  
  static sendImage(projectName, fileBlob) {
    const formData = new FormData();
    formData.append("data", fileBlob);
    
    return postApi(Utils.getStaticImagesPath(projectName), formData, fileBlob.type);
  }
}

export default ApiConnector;
