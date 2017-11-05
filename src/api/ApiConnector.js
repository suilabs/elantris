import GQLQueries from './GraphQL/Queries';
import Utils from '../Utils';

class ApiConnector {
  static apiPath = Utils.getAPIPath();
  
  static getProjects() {
    const query = {
      query: GQLQueries.getProjects
    };
    const headers = new Headers({
      'content-type': 'application/json',
      'Accept': 'application/json'
    });
    const data = JSON.stringify(query);
    const fetchConf = {
      method: 'POST',
      headers: headers,
      mode: 'cors',
      body: data,
    };
    return fetch(this.apiPath, fetchConf);
  };
}

export default ApiConnector;
