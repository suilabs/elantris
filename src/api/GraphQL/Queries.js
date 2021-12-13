const projectFields = `
  id
  url
  name
  cover {
      name
      url
      filename
  }
  description
  type {
      id
      name
  }
  section {
      id
      name
  }
  configuration {
    componentId
    propsJson
  }
`;

const Queries = {
  getProjects: `
    {
      projects {
        ${projectFields}
      }
    }
  `,
  getTypes: '{ types { id name } }',
};

export default Queries;
